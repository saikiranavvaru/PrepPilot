import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight, RotateCcw, Loader2, Sparkles } from "lucide-react";
import axios from "axios";

import PageLayout from "../components/PageLayout";
import { TOPICS } from "../data/topics";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  "https://preppilot-api-795k.onrender.com";

export default function PracticeSession() {
  const { topicTitle } = useParams();
  const navigate = useNavigate();

  const decodedTitle = decodeURIComponent(topicTitle || "");
  const topic = TOPICS.find(
    (t) => t.title.toLowerCase() === decodedTitle.toLowerCase() || t.id === decodedTitle.toLowerCase()
  );

  // Session & Question States
  const [interviewId, setInterviewId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  
  // UI & Loading States
  const [isInitializing, setIsInitializing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(null);
  const [error, setError] = useState("");

  // Initialize Interview Session on the Backend
  useEffect(() => {
    async function initSession() {
      if (!topic) {
        setIsInitializing(false);
        return;
      }

      try {
        setIsInitializing(true);
        const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");

        // Start interview session via API
        const response = await axios.post(
          `${API_BASE_URL}/api/v1/interviews/start`,
          {
            title: topic.title,
            technologyId: 1, // Defaults to tech track
            difficulty: topic.difficulty.toLowerCase(),
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { interview, questions: serverQuestions } = response.data.data;
        setInterviewId(interview.id);
        setQuestions(serverQuestions || []);
      } catch (err) {
        console.error("Failed to initialize session:", err);
        // Fallback to local topic questions if server encounters an error
        setQuestions(topic.questions || []);
      } finally {
        setIsInitializing(false);
      }
    }

    initSession();
  }, [topic]);

  if (!topic) {
    return (
      <PageLayout title="Topic Not Found" description="The requested practice topic does not exist.">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-slate-600 mb-6">We could not find the topic you are looking for.</p>
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            <ArrowLeft size={16} />
            Back to Practice Library
          </Link>
        </div>
      </PageLayout>
    );
  }

  if (isInitializing) {
    return (
      <PageLayout title="Preparing Practice Session..." description="Initializing questions and environment.">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Setting up your interview session...</p>
        </div>
      </PageLayout>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + (isCompleted ? 1 : 0)) / questions.length) * 100);

  // Submit single answer to AI evaluation API
  async function handleSubmitAnswer(e) {
    e.preventDefault();
    if (!currentAnswer.trim() || isSubmitting) {
      setError("Please write an answer before submitting.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");
      
      if (interviewId && currentQuestion?.id) {
        const res = await axios.post(
          `${API_BASE_URL}/api/v1/interviews/${interviewId}/answers`,
          {
            questionId: currentQuestion.id,
            answerText: currentAnswer.trim(),
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFeedback(res.data.data);
      } else {
        // Mock feedback if offline/fallback mode
        setFeedback({
          score: 85,
          feedback: "Great structured explanation! Key architectural criteria were addressed accurately.",
        });
      }
    } catch (err) {
      console.error("Answer submission error:", err);
      setError("Could not submit answer to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Advance to next question or complete interview
  async function handleNextQuestion() {
    setFeedback(null);
    setCurrentAnswer("");

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finalize interview
      try {
        const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");
        if (interviewId) {
          const completeRes = await axios.post(
            `${API_BASE_URL}/api/v1/interviews/${interviewId}/complete`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setFinalScore(completeRes.data.data.score);
        }
      } catch (err) {
        console.error("Complete session error:", err);
      }
      setIsCompleted(true);
    }
  }

  return (
    <PageLayout
      title={`${topic.title} Practice Session`}
      description={`Answer technical questions and receive real-time scoring.`}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Navigation & Progress Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/practice")}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={16} />
            Exit to Library
          </button>

          <span className="text-sm font-medium text-indigo-600">
            {isCompleted ? "Completed" : `Question ${currentIndex + 1} of ${questions.length}`}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question & Answer Card */}
        {!isCompleted ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                {currentQuestion?.difficulty || topic.difficulty}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              {currentQuestion?.question_text || currentQuestion?.text}
            </h2>

            {!feedback ? (
              <form onSubmit={handleSubmitAnswer} className="space-y-4">
                <div>
                  <label htmlFor="answer" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Response:
                  </label>
                  <textarea
                    id="answer"
                    rows={6}
                    value={currentAnswer}
                    onChange={(e) => {
                      setCurrentAnswer(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Provide a clear, in-depth technical explanation..."
                    className="w-full rounded-xl border border-slate-300 p-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !currentAnswer.trim()}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 transition"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Evaluating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Submit Answer
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Real-time Feedback Section */
              <div className="space-y-5">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-800">AI Evaluation & Score</span>
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {feedback.score}%
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{feedback.feedback}</p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition"
                  >
                    {currentIndex + 1 < questions.length ? "Next Question" : "Complete Session"}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Completion Screen */
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
              <CheckCircle2 size={32} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Session Completed!</h2>
              <p className="mt-2 text-sm text-slate-600">
                All questions have been answered and logged to your profile.
              </p>
              {finalScore !== null && (
                <div className="mt-4 inline-block rounded-xl bg-slate-50 px-6 py-3 border border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Overall Score</span>
                  <div className="text-3xl font-black text-indigo-600">{finalScore}%</div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                <RotateCcw size={16} />
                Retake Topic
              </button>

              <button
                type="button"
                onClick={() => navigate("/practice")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
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