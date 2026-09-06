import { useState, useEffect } from "react";
import { 
  User, 
  Mail, 
  ShieldCheck, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Clock, 
  LogOut, 
  Loader2 
} from "lucide-react";
import axios from "axios";

import PageLayout from "../components/PageLayout";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  "https://preppilot-api-795k.onrender.com";

export default function Profile() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    completedCount: 0,
    averageScore: 0,
    totalAttempts: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserStats() {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");

        const res = await axios.get(`${API_BASE_URL}/api/v1/interviews/history`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const history = res.data.data || [];
        const completed = history.filter((h) => h.status === "completed");
        const avg =
          completed.length > 0
            ? Math.round(
                completed.reduce((acc, curr) => acc + (Number(curr.score) || 0), 0) /
                  completed.length
              )
            : 0;

        setStats({
          completedCount: completed.length,
          averageScore: avg,
          totalAttempts: history.length,
        });
      } catch (err) {
        console.error("Failed to load profile stats:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserStats();
  }, []);

  if (isLoading) {
    return (
      <PageLayout title="User Profile" description="Managing your PrepPilot account.">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Loading your profile data...</p>
        </div>
      </PageLayout>
    );
  }

  const joinDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      })
    : "Member";

  return (
    <PageLayout
      title="User Profile"
      description="Manage your account details and view your platform metrics."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Account Info Header Card */}
        <Card className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold text-2xl shadow-sm">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-slate-900">{user?.name}</h2>
                  <Badge variant={user?.is_verified ? "default" : "secondary"}>
                    {user?.is_verified ? "Verified" : "Pending Verification"}
                  </Badge>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Mail size={15} />
                    {user?.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} />
                    Joined {joinDate}
                  </span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={logout}
              className="inline-flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
            >
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>
        </Card>

        {/* Activity & Performance Overview */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Completed Tracks
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <CheckCircle2 size={18} />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900">{stats.completedCount}</div>
            <p className="mt-1 text-xs text-slate-500">Interviews finalized</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Average Score
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Award size={18} />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900">{stats.averageScore}%</div>
            <p className="mt-1 text-xs text-slate-500">Technical competency</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Total Attempts
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <Clock size={18} />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900">{stats.totalAttempts}</div>
            <p className="mt-1 text-xs text-slate-500">Started sessions</p>
          </Card>
        </div>

        {/* Account Security Settings Section */}
        <Card className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Security & Credentials</h3>
            <p className="mt-1 text-sm text-slate-600">
              Your security configuration and account settings.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-slate-400" size={20} />
                <div>
                  <div className="text-sm font-medium text-slate-800">Email Verification</div>
                  <div className="text-xs text-slate-500">
                    {user?.is_verified
                      ? "Your account email address is verified."
                      : "Check your inbox for a verification link."}
                  </div>
                </div>
              </div>
              <Badge variant={user?.is_verified ? "default" : "secondary"}>
                {user?.is_verified ? "Active" : "Unverified"}
              </Badge>
            </div>

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <User className="text-slate-400" size={20} />
                <div>
                  <div className="text-sm font-medium text-slate-800">Account ID</div>
                  <div className="text-xs text-slate-500">User reference: #{user?.id}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}