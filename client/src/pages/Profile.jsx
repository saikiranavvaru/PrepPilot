import { useEffect, useRef, useState } from "react";
import { AlertCircle, Award, Calendar, CheckCircle2, Download, FileText, Loader2, Mail, ShieldCheck, Sparkles, Upload } from "lucide-react";
import axios from "axios";

import PageLayout from "../components/PageLayout";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";
import { API_BASE_URL } from "../utils/config";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

function formatFileSize(size) {
  if (!size) return "PDF resume";
  return `${(size / 1024 / 1024).toFixed(size < 1024 * 1024 ? 1 : 2)} MB`;
}

function formatDate(value) {
  if (!value) return "Just now";
  return new Date(value).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export default function Profile() {
  const { user } = useAuth();
  const fileInputRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [resume, setResume] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function loadProfileData() {
      const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const [historyResult, resumeResult] = await Promise.allSettled([
        axios.get(`${API_BASE_URL}/api/v1/interviews/history`, { headers }),
        axios.get(`${API_BASE_URL}/api/v1/resumes/me`, { headers }),
      ]);

      if (historyResult.status === "fulfilled") setHistory(historyResult.value.data.data || []);
      if (resumeResult.status === "fulfilled") {
        const currentResume = resumeResult.value.data.data;
        setResume(currentResume);
        setSummary(currentResume?.summary || "");
      }
      setIsLoading(false);
    }

    loadProfileData();
  }, []);

  const completedSessions = history.filter((item) => item.status === "completed" || item.completed_at);
  const averageScore = completedSessions.length
    ? Math.round(completedSessions.reduce((total, item) => total + (Number(item.score) || 0), 0) / completedSessions.length)
    : 0;
  const userInitial = user?.name?.trim()?.charAt(0)?.toUpperCase() || "P";
  const joinDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString(undefined, { month: "long", year: "numeric" })
    : "PrepPilot member";
  const milestones = [
    { label: "Account created", complete: Boolean(user?.id) },
    { label: "Email verified", complete: Boolean(user?.is_verified) },
    { label: "Resume added", complete: Boolean(resume) },
    { label: "First interview completed", complete: completedSessions.length > 0 },
  ];
  const completedMilestones = milestones.filter((milestone) => milestone.complete).length;

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    setError("");
    setSuccessMessage("");
    if (!file) return;

    if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
      setError("Choose a PDF resume.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_RESUME_SIZE) {
      setError("Your resume must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }
    setSelectedFile(file);
  }

  async function handleUpload() {
    if (!selectedFile || isUploading) return;
    setIsUploading(true);
    setError("");
    setSuccessMessage("");

    try {
      const formData = new FormData();
      formData.append("resume", selectedFile);
      formData.append("summary", summary.trim());
      const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");
      const response = await axios.post(`${API_BASE_URL}/api/v1/resumes/me`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setResume(response.data.data);
      setSummary(response.data.data.summary || "");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSuccessMessage("Your resume is saved securely to your profile.");
    } catch (uploadError) {
      setError(uploadError.response?.data?.message || "We could not upload your resume. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  async function handleDownload() {
    try {
      const token = localStorage.getItem("preppilot_token") || localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/v1/resumes/me/download`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });
      const downloadUrl = URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = resume?.fileName || "PrepPilot-resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch {
      setError("We could not download your resume. Please upload it again.");
    }
  }

  if (isLoading) {
    return (
      <PageLayout title="Profile" description="Loading your PrepPilot profile.">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">Loading your profile...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl space-y-6 pb-8">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-28 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-500 sm:h-36" />
          <div className="relative px-5 pb-6 sm:px-8">
            <div className="-mt-12 flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-slate-900 text-3xl font-bold text-white shadow-lg">{userInitial}</div>
            <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-2"><h1 className="text-2xl font-bold tracking-tight text-slate-900">{user?.name || "PrepPilot member"}</h1><Badge variant={user?.is_verified ? "default" : "secondary"}>{user?.is_verified ? "Verified" : "Email pending"}</Badge></div>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-600"><Mail size={15} /> {user?.email || "Email address unavailable"}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-500"><Calendar size={15} /> Member since {joinDate}</p>
              </div>
              <div className="rounded-xl bg-indigo-50 px-4 py-3 text-sm"><p className="font-semibold text-indigo-900">Profile progress</p><p className="mt-0.5 text-indigo-700">{completedMilestones} of {milestones.length} milestones complete</p></div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="space-y-6 lg:col-span-2">
            <Card className="p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div><div className="flex items-center gap-2"><FileText className="text-indigo-600" size={21} /><h2 className="text-lg font-bold text-slate-900">Resume</h2></div><p className="mt-1 text-sm leading-6 text-slate-600">Keep one current PDF resume on your private PrepPilot profile.</p></div>
                {resume && <Button variant="outline" onClick={handleDownload}><Download size={16} /> Download</Button>}
              </div>

              {resume ? (
                <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm"><FileText size={20} /></div><div className="min-w-0"><p className="truncate text-sm font-semibold text-slate-900">{resume.fileName}</p><p className="mt-0.5 text-xs text-slate-600">Uploaded {formatDate(resume.uploadedAt)} · {formatFileSize(resume.fileSize)}</p></div></div><label className="cursor-pointer text-sm font-semibold text-indigo-700 hover:text-indigo-800">Replace<input ref={fileInputRef} type="file" accept="application/pdf" className="sr-only" onChange={handleFileChange} /></label></div>
                  {resume.summary && <p className="mt-4 border-t border-emerald-100 pt-4 text-sm leading-6 text-slate-700">{resume.summary}</p>}
                </div>
              ) : (
                <label className="mt-5 flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/50 px-5 py-8 text-center transition hover:border-indigo-400 hover:bg-indigo-50"><Upload className="h-7 w-7 text-indigo-600" /><span className="mt-3 text-sm font-semibold text-slate-900">Choose your resume</span><span className="mt-1 text-xs text-slate-600">PDF only · Maximum 5 MB</span><input ref={fileInputRef} type="file" accept="application/pdf" className="sr-only" onChange={handleFileChange} /></label>
              )}

              {selectedFile && <div className="mt-5 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-3"><FileText className="text-indigo-600" size={20} /><div className="min-w-0"><p className="truncate text-sm font-semibold text-slate-900">{selectedFile.name}</p><p className="text-xs text-slate-500">{formatFileSize(selectedFile.size)}</p></div></div><div><label htmlFor="resume-summary" className="text-sm font-medium text-slate-800">Brief profile summary <span className="font-normal text-slate-500">(optional)</span></label><textarea id="resume-summary" rows={3} maxLength={500} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Example: Frontend developer focused on React, Node.js, and product design." className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" /></div><div className="flex justify-end"><Button onClick={handleUpload} disabled={isUploading}>{isUploading ? <><Loader2 className="animate-spin" size={16} /> Uploading...</> : <><Upload size={16} /> Save resume</>}</Button></div></div>}
              {error && <p role="alert" className="mt-4 flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700"><AlertCircle size={16} /> {error}</p>}
              {successMessage && <p className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700"><CheckCircle2 size={16} /> {successMessage}</p>}
            </Card>

            <Card className="p-5 sm:p-6"><div className="flex items-center gap-2"><Sparkles className="text-indigo-600" size={21} /><h2 className="text-lg font-bold text-slate-900">Your next steps</h2></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{milestones.map((milestone) => <div key={milestone.label} className={`flex items-center gap-3 rounded-xl border p-3 ${milestone.complete ? "border-emerald-100 bg-emerald-50/60" : "border-slate-200 bg-white"}`}><CheckCircle2 size={18} className={milestone.complete ? "text-emerald-600" : "text-slate-300"} /><span className={`text-sm font-medium ${milestone.complete ? "text-emerald-800" : "text-slate-600"}`}>{milestone.label}</span></div>)}</div></Card>
          </section>

          <aside className="space-y-4">
            <Card className="p-5"><h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Performance</h2><div className="mt-5 space-y-5"><div><p className="text-3xl font-bold text-slate-900">{completedSessions.length}</p><p className="mt-1 text-sm text-slate-600">Completed interviews</p></div><div className="border-t border-slate-100 pt-4"><p className="text-3xl font-bold text-slate-900">{averageScore}%</p><p className="mt-1 text-sm text-slate-600">Average score</p></div><div className="border-t border-slate-100 pt-4"><p className="text-3xl font-bold text-slate-900">{history.length}</p><p className="mt-1 text-sm text-slate-600">Practice attempts</p></div></div></Card>
            <Card className="p-5"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-indigo-600" size={20} /><div><h2 className="font-semibold text-slate-900">Private by default</h2><p className="mt-1 text-sm leading-6 text-slate-600">Your resume is downloaded through your authenticated account and is not publicly exposed.</p></div></div></Card>
            <Card className="p-5"><div className="flex items-center gap-3"><Award className="text-amber-500" size={20} /><div><p className="font-semibold text-slate-900">Badges are coming</p><p className="mt-1 text-sm text-slate-600">Earn them through completed practice tracks.</p></div></div></Card>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
