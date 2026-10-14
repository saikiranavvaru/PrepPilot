import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";

import PageLayout from "../../../shared/layout/PageLayout";
import {
  completeInterview,
  startInterview,
  submitInterviewAnswer,
} from "../../interviews/interview.api";

export default function PracticeSession() {
  const { topicSlug } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function initializeSession() {
      try {
        setIsInitializing(true);
        setError("");

        const sessionData = await startInterview({
          topicSlug,
        });

        if (!isMounted) return;

        if (!sessionData?.interview?.id || !Array.isArray(sessionData.questions)) {
          throw new Error("The practice session could not be initialized.");
        }

        setSession(sessionData.interview);
        setQuestions(sessionData.questions);
      } catch (requestError) {
        if (!isMounted) return;
        setError(
          requestError.message || "Unable to start this practice session."
        );
      } finally {
        if (isMounted) setIsInitializing(false);
      }
    }

    if (topicSlug) {
      initializeSession();
    } else {
      setIsInitializing(false);
      setError("A practice topic is required.");
    }

    return () => {
      isMounted = false;
    };
  }, [topicSlug]);

  const currentQuestion = questions[currentIndex];
  const questionCount = questions.length;
  const progressPercent = questionCount
    ? Math.round(((currentIndex + (isCompleted ? 1 : 0)) / questionCount) * 100)
    : 0;

  async function handleSubmitAnswer(event) {
    event.preventDefault();

    if (!currentAnswer.trim()) {
      setError("Please write an answer before submitting.");
      return;
    }

    if (!session?.id || !currentQuestion?.id) {
      setError("This session is incomplete. Return to the Practice Library and try again.");
      return;
    }

    try {
      setError("");
      setIsSubmitting(true);

      const answerResult = await submitInterviewAnswer(session.id, {
        questionId: currentQuestion.id,
        answerText: currentAnswer.trim(),
      });

      setFeedback(answerResult);
    } catch (requestError) {
      setError(requestError.message || "Unable to save your answer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleNextQuestion() {
    setFeedback(null);
    setCurrentAnswer("");
    setError("");

    if (currentIndex + 1 < questionCount) {
      setCurrentIndex((previous) => previous + 1);
      return;
    }

    try {
      setIsSubmitting(true);
      const completion = await completeInterview(session.id);
      setFinalScore(completion.interview.score);
      setIsCompleted(true);
    } catch (requestError) {
      setError(requestError.message || "Unable to complete this practice session.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isInitializing) {
    return (
      <PageLayout title="Preparing practice session" description="Loading your interview questions.">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">
            Setting up your interview session...
          </p>
        </div>
      </PageLayout>
    );
  }

  if (error && !session) {
    return (
      <PageLayout title="Practice session unavailable" description="We could not start this topic.">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="text-sm text-red-700">{error}</p>
          <button
            type="button"
            onClick={() => navigate("/practice")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
          >
            <ArrowLeft size={16} />
            Back to Practice Library
          </button>
        </div>
      </PageLayout>
    );
  }

  const topicName = session?.topic?.name || "Practice";

  return (
    <PageLayout
      title={`${topicName} Practice Session`}
      description="Answer each question and receive structured feedback."
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/practice")}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            Exit to Library
          </button>
          <span className="text-sm font-medium text-indigo-600">
            {isCompleted ? "Completed" : `Question ${currentIndex + 1} of ${questionCount}`}
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {!isCompleted ? (
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {currentQuestion?.difficulty || "Intermediate"}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              {currentQuestion?.questionText || currentQuestion?.question}
            </h2>

            {!feedback ? (
              <form onSubmit={handleSubmitAnswer} className="space-y-4">
                <div>
                  <label htmlFor="answer" className="mb-2 block text-sm font-medium text-slate-700">
                    Your response
                  </label>
                  <textarea
                    id="answer"
                    rows={7}
                    value={currentAnswer}
                    onChange={(event) => {
                      setCurrentAnswer(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Explain your reasoning clearly, then add a practical example..."
                    className="w-full rounded-xl border border-slate-300 p-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                  <p className="mt-2 text-xs text-slate-500">Minimum 20 characters.</p>
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !currentAnswer.trim()}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-4 w-4 animate-spin" />Evaluating...</>
                    ) : (
                      <><Sparkles size={16} />Submit Answer</>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-800">Answer score</span>
                    <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-sm font-bold text-indigo-600">
                      {feedback.score}%
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{feedback.feedback}</p>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {currentIndex + 1 < questionCount ? "Next Question" : "Complete Session"}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Session completed</h2>
              <p className="mt-2 text-sm text-slate-600">Your responses and scores have been saved.</p>
              <div className="mt-4 inline-block rounded-xl border border-slate-200 bg-slate-50 px-6 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Overall score</span>
                <div className="text-3xl font-black text-indigo-600">{finalScore}%</div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate(`/practice/session/${encodeURIComponent(topicSlug)}`)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <RotateCcw size={16} />
                Practice Again
              </button>
              <button
                type="button"
                onClick={() => navigate("/practice")}
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Practice Library
              </button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
