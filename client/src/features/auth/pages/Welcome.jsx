import { Link, Navigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { BrandMark } from "../../../shared/brand";
import { useAuth } from "../../../app/providers/AuthProvider";
import InterviewHeroIllustration from "../components/InterviewHeroIllustration";

export default function Welcome() {
  const { isAuthenticated, isLoading } = useAuth();
  if (!isLoading && isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafbff] text-slate-950">
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <BrandMark />
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/login" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white">Sign in</Link>
          <Link to="/register" className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700">Create account</Link>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-5.5rem)] max-w-7xl items-center gap-10 px-5 pb-12 pt-6 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="absolute -right-48 top-8 h-[35rem] w-[35rem] rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-sm font-bold tracking-[0.12em] text-indigo-700">PREPPILOT</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">Practice with intention.<br /><span className="text-indigo-700">Show up with presence.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">PrepPilot gives your ambition a daily rhythm—so when opportunity arrives, your answer is already there.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700">Get started <ArrowRight size={17} /></Link>
            <Link to="/login" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">I already have an account</Link>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm text-slate-500"><ShieldCheck size={17} className="text-indigo-700" /> A private space for your preparation.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[38rem] lg:-translate-y-4">
          <InterviewHeroIllustration />
        </div>
      </section>
    </main>
  );
}
