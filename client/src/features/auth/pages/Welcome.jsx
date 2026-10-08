import { Link, Navigate } from "react-router-dom";
import { ArrowRight, BarChart3, BrainCircuit, CheckCircle2, Clock3, FileText, ShieldCheck, Sparkles } from "lucide-react";

import { BrandMark } from "../../../shared/brand";
import { useAuth } from "../../../app/providers/AuthProvider";

const highlights = [
  { icon: BrainCircuit, title: "Practice with purpose", copy: "Guided technical sessions that build clarity, not noise." },
  { icon: BarChart3, title: "See the signal", copy: "Review each attempt and notice how your answers improve." },
  { icon: FileText, title: "Stay prepared", copy: "Keep your resume, profile, and progress close at hand." },
];

export default function Welcome() {
  const { isAuthenticated, isLoading } = useAuth();
  if (!isLoading && isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <BrandMark />
        <div className="flex items-center gap-2 sm:gap-4"><Link to="/login" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white">Sign in</Link><Link to="/register" className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-indigo-700">Create account</Link></div>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-9 sm:px-8 sm:pb-24 lg:px-10 lg:pt-16">
        <div className="absolute -right-48 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-200/60 blur-3xl" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-bold text-indigo-700 shadow-sm"><Sparkles size={14} /> AI-ready technical interview preparation</div>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">Know what to practice.<br /><span className="text-indigo-600">Own the interview.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">PrepPilot helps you develop sharper answers and a calmer interview habit—one focused session at a time.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700">Start preparing free <ArrowRight size={17} /></Link><Link to="/login" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">I already have an account</Link></div>
            <div className="mt-7 flex items-center gap-2 text-sm text-slate-500"><ShieldCheck size={17} className="text-emerald-600" /> Secure account · Your data stays private</div>
          </div>

          <div className="relative mx-auto w-full max-w-lg rounded-[1.75rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur sm:p-5">
            <div className="rounded-[1.25rem] bg-slate-950 p-5 text-white sm:p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold">Today’s practice</span><span className="rounded-full bg-lime-300 px-2.5 py-1 text-[11px] font-black text-slate-950">IN PROGRESS</span></div><p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-indigo-200">React & Frontend · Question 2 of 3</p><p className="mt-3 text-lg font-semibold leading-7">How would you avoid unnecessary re-renders in a data-heavy React view?</p><div className="mt-8 h-2 overflow-hidden rounded-full bg-white/15"><div className="h-full w-2/3 rounded-full bg-lime-300" /></div></div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2"><div className="rounded-2xl border border-slate-100 p-4"><div className="flex items-center gap-2 text-xs font-bold text-slate-500"><Clock3 size={15} /> PRACTICE STREAK</div><p className="mt-3 text-3xl font-black tracking-tight text-slate-950">07 <span className="text-sm font-semibold text-slate-400">days</span></p></div><div className="rounded-2xl border border-slate-100 p-4"><div className="flex items-center gap-2 text-xs font-bold text-slate-500"><CheckCircle2 size={15} /> ANSWER QUALITY</div><p className="mt-3 text-3xl font-black tracking-tight text-indigo-600">84<span className="text-sm">%</span></p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:px-10">{highlights.map(({ icon: Icon, title, copy }) => <article key={title}><div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><Icon size={20} /></div><h2 className="mt-4 font-bold text-slate-950">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></article>)}</div></section>
    </main>
  );
}
