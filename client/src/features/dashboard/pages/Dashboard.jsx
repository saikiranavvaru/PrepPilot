import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Play,
} from "lucide-react";

import { useAuth } from "../../../app/providers/AuthProvider";
import DashboardFocusIllustration from "../components/DashboardFocusIllustration";
import { getDashboard } from "../dashboard.api";
import PageLayout from "../../../shared/layout/PageLayout";

function formatDate(value) {
  if (!value) return "Recently";

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function SessionStatus({ session }) {
  if (session.status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
        <CheckCircle2 size={14} />
        Completed {session.score !== null ? `· ${session.score}%` : ""}
      </span>
    );
  }

  return (
    <span className="text-xs font-semibold text-indigo-700">
      In progress · {session.answeredCount}/{session.questionCount} answered
    </span>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      setDashboard(await getDashboard());
    } catch (requestError) {
      setError(requestError.message || "Unable to load your dashboard.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  if (isLoading) {
    return (
      <PageLayout title="Your workspace" description="Loading your recent preparation.">
        <div className="flex min-h-72 flex-col items-center justify-center">
          <Loader2 className="h-9 w-9 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Preparing your dashboard...</p>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Your workspace" description="Your practice data could not be loaded.">
        <div className="max-w-xl rounded-2xl border border-rose-200 bg-rose-50 p-6">
          <p className="text-sm font-medium text-rose-800">{error}</p>
          <button
            type="button"
            onClick={loadDashboard}
            className="mt-4 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Try again
          </button>
        </div>
      </PageLayout>
    );
  }

  const { summary, continueSession, recentSessions, recommendedTopics } = dashboard;
  const hasActivity = summary.completedSessions > 0 || summary.activeSessions > 0;
  const firstName = user?.name?.trim()?.split(/\s+/)[0] || "there";

  return (
    <PageLayout
      title={`Welcome back, ${firstName}.`}
      description="A clear view of your preparation, one focused session at a time."
      wide
    >
      <div className="space-y-8">
        <section className="relative overflow-hidden px-2 py-5 sm:px-3 sm:py-6 lg:grid lg:min-h-[310px] lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10">
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-amber-200/35 blur-3xl" />
          <div className="absolute -bottom-24 left-[38%] h-44 w-44 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]" />
              PREPPILOT WORKSPACE
            </div>

            {continueSession ? (
              <>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
                  Continue with intention.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                  Your {continueSession.topic?.name || "practice"} session is ready where you left it.
                </p>
                <div className="mt-6 max-w-md">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{continueSession.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {continueSession.answeredCount} of {continueSession.questionCount} questions answered
                      </p>
                    </div>
                    <span className="text-sm font-bold text-indigo-700">{continueSession.progressPercent}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-indigo-100">
                    <div
                      className="h-full rounded-full bg-indigo-600 transition-all"
                      style={{ width: `${continueSession.progressPercent}%` }}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/practice/sessions/${continueSession.id}`)}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                >
                  <Play size={16} fill="currentColor" />
                  Continue practice
                </button>
              </>
            ) : (
              <>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
                  Your next opportunity deserves preparation.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                  Choose one focused topic, explain your thinking, and build a stronger interview rhythm.
                </p>
                <Link
                  to="/practice"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                >
                  Explore practice topics
                  <ArrowRight size={16} />
                </Link>
              </>
            )}
          </div>

          <div className="relative z-10 mx-auto mt-6 hidden w-full lg:mt-0 lg:block">
            <DashboardFocusIllustration />
          </div>
        </section>

        <section aria-label="Practice summary" className="grid divide-y divide-indigo-100/80 border-y border-indigo-100/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="rounded-xl py-5 transition-colors hover:bg-white/55 sm:px-6 sm:first:pl-0">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">Completed</p>
            <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">{summary.completedSessions}</p>
            <p className="mt-1 text-sm text-slate-500">sessions finished</p>
          </div>
          <div className="rounded-xl py-5 transition-colors hover:bg-white/55 sm:px-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">Average score</p>
            <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">{summary.averageScore}%</p>
            <p className="mt-1 text-sm text-slate-500">completed sessions only</p>
          </div>
          <div className="rounded-xl py-5 transition-colors hover:bg-white/55 sm:px-6 sm:pr-0">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">Active focus</p>
            <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">{summary.activeSessions}</p>
            <p className="mt-1 text-sm text-slate-500">session{summary.activeSessions === 1 ? "" : "s"} in progress</p>
          </div>
        </section>

        {!hasActivity ? (
          <section className="max-w-2xl py-2">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950">Begin with one clear topic.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Your completed sessions, feedback, and topic performance will appear here as you practice.
            </p>
          </section>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <section>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-indigo-700">RECENT ACTIVITY</p>
                <h2 className="mt-2 text-xl font-black tracking-[-0.035em] text-slate-950">Your practice history</h2>
              </div>
              <Link to="/progress" className="text-sm font-bold text-indigo-700 underline-offset-4 transition hover:text-indigo-900 hover:underline">
                View progress
              </Link>
            </div>

            {recentSessions.length ? (
              <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
                {recentSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between gap-4 rounded-xl py-4 transition-colors hover:bg-white/55 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">{session.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {session.topic?.name || "Practice session"} · {formatDate(session.lastActivityAt)}
                      </p>
                    </div>
                    <div className="shrink-0 text-right"><SessionStatus session={session} /></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 border-y border-slate-200 py-7 text-sm text-slate-500">
                No sessions yet. Your progress starts with one thoughtful answer.
              </div>
            )}
          </section>

          <section>
            <p className="text-xs font-bold tracking-[0.12em] text-indigo-700">NEXT FOCUS</p>
            <h2 className="mt-2 text-xl font-black tracking-[-0.035em] text-slate-950">Recommended for you</h2>
            <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
              {recommendedTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  to={`/practice/session/${encodeURIComponent(topic.slug)}`}
                  className="group flex items-center justify-between gap-4 rounded-xl py-4 transition-colors hover:bg-white/55 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">{topic.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{topic.reason} · {topic.questionCount} questions</p>
                  </div>
                  <ChevronRight className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-700" size={18} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
