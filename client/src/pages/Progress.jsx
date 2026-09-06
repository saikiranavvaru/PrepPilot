import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Loader2 
} from "lucide-react";
import axios from "axios";

import PageLayout from "../components/PageLayout";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

const API_BASE_URL = "http://localhost:3000/api/v1";

export default function Progress() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProgressData() {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_BASE_URL}/interviews/history`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setHistory(response.data.data || []);
      } catch (err) {
        console.error("Failed to load progress history:", err);
        setError("Unable to load interview history from server.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProgressData();
  }, []);

  // Compute Analytics Metrics
  const completedSessions = history.filter((item) => item.status === "completed");
  const totalCompleted = completedSessions.length;
  
  const averageScore = totalCompleted > 0
    ? Math.round(
        completedSessions.reduce((acc, curr) => acc + (Number(curr.score) || 0), 0) / totalCompleted
      )
    : 0;

  if (isLoading) {
    return (
      <PageLayout title="Progress & Analytics" description="Track your practice performance and review history.">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Loading your performance metrics...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Progress & Analytics"
      description="Track your practice performance, review scores, and revisit past sessions."
    >
      <div className="space-y-8">
        {/* Metric Cards Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Completed Sessions</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CheckCircle2 size={20} />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{totalCompleted}</div>
            <p className="mt-1 text-xs text-slate-500">Total mock interviews finalized</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Average Score</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Award size={20} />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{averageScore}%</div>
            <p className="mt-1 text-xs text-slate-500">Across all completed technical tracks</p>
          </Card>

          <Card className="p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Total Attempts</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <BarChart3 size={20} />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{history.length}</div>
            <p className="mt-1 text-xs text-slate-500">Started practice sessions</p>
          </Card>
        </section>

        {/* History Table / List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Recent Interview History</h2>
            <Link
              to="/practice"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
            >
              Start New Practice
              <ArrowRight size={16} />
            </Link>
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {history.length > 0 ? (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="divide-y divide-slate-200">
                {history.map((session) => (
                  <div
                    key={session.id}
                    className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between hover:bg-slate-50/75 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{session.title}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {new Date(session.created_at).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span>•</span>
                          <span className="capitalize">{session.technology_name || "General Tech"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <Badge variant={session.status === "completed" ? "default" : "secondary"}>
                        {session.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>

                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Score</span>
                        <span className="text-base font-bold text-slate-800">
                          {session.score !== null ? `${Math.round(session.score)}%` : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <h3 className="text-lg font-semibold text-slate-900">No practice sessions yet</h3>
              <p className="mt-2 text-sm text-slate-600">
                Complete your first interview session to start tracking your performance.
              </p>
              <Link
                to="/practice"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
              >
                Go to Practice Library
              </Link>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
}