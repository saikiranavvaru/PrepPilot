import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Clock, 
  BookOpen, 
  Zap, 
  Loader2 
} from "lucide-react";
import axios from "axios";

import PageLayout from "../components/PageLayout";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import { TOPICS } from "../data/topics";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  "https://preppilot-api-795k.onrender.com";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");

        const response = await axios.get(`${API_BASE_URL}/api/v1/interviews/history`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setHistory(response.data.data || []);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const completedSessions = history.filter((h) => h.status === "completed");
  const averageScore = completedSessions.length > 0
    ? Math.round(
        completedSessions.reduce((acc, curr) => acc + (Number(curr.score) || 0), 0) /
          completedSessions.length
      )
    : 0;

  if (isLoading) {
    return (
      <PageLayout title="Dashboard" description="Loading your interview workspace...">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Preparing your dashboard...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`Welcome back, ${user?.name || "Developer"} 👋`}
      description="Track your performance, review recent interviews, and continue practicing."
    >
      <div className="space-y-8">
        {/* Quick Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8 text-white shadow-lg">
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
              <Sparkles size={14} /> AI-Powered Practice
            </span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Ready for your next mock technical interview?
            </h2>
            <p className="text-indigo-100 text-sm md:text-base leading-relaxed">
              Sharpen your responses across JavaScript, React, and Database architecture with instant AI feedback.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => navigate("/practice")}
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold shadow-md"
              >
                Start Practice Session
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Real-time Summary Cards */}
        <section className="grid gap-6 sm:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Completed
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CheckCircle2 size={20} />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{completedSessions.length}</div>
            <p className="mt-1 text-xs text-slate-500">Interviews finalized</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Avg. Score
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Award size={20} />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{averageScore}%</div>
            <p className="mt-1 text-xs text-slate-500">Overall technical accuracy</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Practice Topics
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Zap size={20} />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{TOPICS.length}</div>
            <p className="mt-1 text-xs text-slate-500">Available tracks ready</p>
          </Card>
        </section>

        {/* Two-Column Main Content Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Quick Track Launcher (2 columns wide) */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Featured Practice Tracks</h3>
              <Link
                to="/practice"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                View all topics
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TOPICS.slice(0, 2).map((topic) => (
                <Card key={topic.id} className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md uppercase">
                        {topic.difficulty}
                      </span>
                      <span className="text-xs text-slate-400">
                        {topic.questions.length} Questions
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{topic.title}</h4>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button
                      variant="outline"
                      className="w-full text-xs"
                      onClick={() => navigate(`/practice/session/${encodeURIComponent(topic.title)}`)}
                    >
                      Practice Now
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity Sidebar (1 column wide) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
              <Link
                to="/progress"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Full History
              </Link>
            </div>

            <Card className="p-6">
              {history.length > 0 ? (
                <div className="space-y-4">
                  {history.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-start justify-between border-b border-slate-100 pb-3.5 last:border-0 last:pb-0">
                      <div className="space-y-1">
                        <h5 className="text-sm font-semibold text-slate-900">{item.title}</h5>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock size={12} />
                          {new Date(item.created_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={item.status === "completed" ? "default" : "secondary"}>
                          {item.status === "completed" ? `${Math.round(item.score)}%` : "In Progress"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-500 text-sm">
                  <BookOpen size={28} className="mx-auto text-slate-300 mb-2" />
                  No interview sessions taken yet.
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}