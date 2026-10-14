import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";

import PageLayout from "../../../shared/layout/PageLayout";
import {
  completeInterview,
  getInterviewSession,
  startInterview,
  submitInterviewAnswer,
} from "../../interviews/interview.api";

export default function PracticeSession() {
  const { topicSlug, interviewId } = useParams();
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

  function selectQuestion(nextQuestions, index) {
    const question = nextQuestions[index];
    setCurrentIndex(index);
    setCurrentAnswer(question?.answer?.text || "");
    setFeedback(
      question?.answer
        ? {
            score: question.answer.score,
            feedback: question.answer.feedback,
            feedbackDetails: question.answer.feedbackDetails,
          }
        : null
    );
  }

  useEffect(() => {
    let isMounted = true;

    async function initializeSession() {
      try {
        setIsInitializing(true);
        setError("");
        setFeedback(null);

        const sessionData = interviewId
          ? await getInterviewSession(interviewId)
          : await startInterview({ topicSlug });

        if (!isMounted) return;

        if (!sessionData?.interview?.id || !Array.isArray(sessionData.questions)) {
          throw new Error("The practice session could not be loaded.");
        }

        setSession(sessionData.interview);
        setQuestions(sessionData.questions);
        setIsCompleted(sessionData.interview.status === "completed");
        setFinalScore(
          sessionData.interview.status === "completed"
            ? sessionData.interview.score
            : null
        );

        const firstUnansweredIndex = sessionData.questions.findIndex(
          (question) => !question.answer
        );
        const initialIndex = firstUnansweredIndex === -1
          ? Math.max(sessionData.questions.length - 1, 0)
          : firstUnansweredIndex;

        selectQuestion(sessionData.questions, initialIndex);
      } catch (requestError) {
        if (!isMounted) return;
        setError(requestError.message || "Unable to load this practice session.");
      } finally {
        if (isMounted) setIsInitializing(false);
      }
    }

    if (interviewId || topicSlug) {
      initializeSession();
    } else {
      setError("A practice topic or saved session is required.");
      setIsInitializing(false);
    }

    return () => {
      isMounted = false;
    };
  }, [interviewId, topicSlug]);

  const currentQuestion = questions[currentIndex];
  const questionCount = questions.length;
  const answeredCount = questions.filter((question) => question.answer).length;
  const progressPercent = questionCount
    ? Math.round((answeredCount / questionCount) * 100)
    : 0;

  function moveToQuestion(index) {
    setError("");
    selectQuestion(questions, index);
  }

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

      const nextQuestions = questions.map((question) =>
        question.id === currentQuestion.id
          ? {
              ...question,
              answer: {
                text: currentAnswer.trim(),
                score: answerResult.score,
                feedback: answerResult.feedback,
                feedbackDetails: answerResult.feedbackDetails,
              },
            }
          : question
      );

      setQuestions(nextQuestions);
      setFeedback(answerResult);
    } catch (requestError) {
      setError(requestError.message || "Unable to save your answer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleNextQuestion() {
    setError("");

    if (currentIndex + 1 < questionCount) {
      moveToQuestion(currentIndex + 1);
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
      <PageLayout title="Preparing practice session" description="Loading your saved interview data.">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Setting up your interview session...</p>
        </div>
      </PageLayout>
    );
  }

  if (error && !session) {
    return (
      <PageLayout title="Practice session unavailable" description="We could not load this session.">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center">
          <p className="text-sm text-rose-700">{error}</p>
          <button
            type="button"
            onClick={() => navigate("/practice")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-medium text-white"
          >
            <ArrowLeft size={16} />
            Back to Practice Library
          </button>
        </div>
      </PageLayout>
    );
  }

  const topicName = session?.topic?.name || "Practice";
  const practiceAgainSlug = session?.topic?.slug || topicSlug;

  return (
    <PageLayout
      title={`${topicName} Practice Session`}
      description="Explain your reasoning clearly and build confidence one answer at a time."
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
          <span className="text-sm font-medium text-indigo-700">
            {isCompleted ? "Completed" : `${answeredCount} of ${questionCount} answered`}
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>

        {!isCompleted ? (
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                {currentQuestion?.difficulty || "Intermediate"}
              </span>
              <span className="text-xs font-semibold text-slate-500">Question {currentIndex + 1} of {questionCount}</span>
            </div>

            <h2 className="text-xl font-bold tracking-[-0.02em] text-slate-950">
              {currentQuestion?.questionText || currentQuestion?.question}
            </h2>

            {!feedback ? (
              <form onSubmit={handleSubmitAnswer} className="space-y-4">
                <div>
                  <label htmlFor="answer" className="mb-2 block text-sm font-bold text-slate-800">Your response</label>
                  <textarea
                    id="answer"
                    rows={7}
                    value={currentAnswer}
                    onChange={(event) => {
                      setCurrentAnswer(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Explain your reasoning clearly, then add a practical example..."
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                  <p className="mt-2 text-xs text-slate-500">Minimum 20 characters.</p>
                  {error && <p role="alert" className="mt-2 text-sm text-rose-600">{error}</p>}
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  {currentIndex > 0 ? (
                    <button type="button" onClick={() => moveToQuestion(currentIndex - 1)} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900">
                      <ChevronLeft size={16} /> Previous
                    </button>
                  ) : <span />}
                  <button
                    type="submit"
                    disabled={isSubmitting || !currentAnswer.trim()}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Saving...</> : <><Sparkles size={16} />Submit answer</>}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="space-y-3 rounded-xl bg-indigo-50/70 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-slate-900">Structured feedback</span>
                    <span className="rounded-md bg-white px-2.5 py-1 text-sm font-bold text-indigo-700">{feedback.score}%</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{feedback.feedback}</p>
                </div>

                {error && <p role="alert" className="text-sm text-rose-600">{error}</p>}

                <div className="flex items-center justify-between gap-3">
                  {currentIndex > 0 ? (
                    <button type="button" onClick={() => moveToQuestion(currentIndex - 1)} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900">
                      <ChevronLeft size={16} /> Previous
                    </button>
                  ) : <span />}
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {currentIndex + 1 < questionCount ? "Next question" : "Complete session"}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 size={32} /></div>
            <div>
              <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950">Session completed</h2>
              <p className="mt-2 text-sm text-slate-600">Your answers, feedback, and score are safely stored in your progress history.</p>
              <div className="mt-5 inline-block rounded-xl bg-slate-50 px-6 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Overall score</span>
                <div className="text-3xl font-black tracking-[-0.04em] text-indigo-700">{finalScore ?? 0}%</div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
              {practiceAgainSlug ? (
                <button
                  type="button"
                  onClick={() => navigate(`/practice/session/${encodeURIComponent(practiceAgainSlug)}`)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
                >
                  <RotateCcw size={16} /> Practice this topic
                </button>
              ) : null}
              <button type="button" onClick={() => navigate("/practice")} className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700">Practice Library</button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
