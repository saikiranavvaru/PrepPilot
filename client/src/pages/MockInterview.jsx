import { ArrowRight, CheckCircle2, Clock3, Mic, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { TOPICS } from "../data/topics";

export default function MockInterview() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Mock Interview"
      description="Practice a guided technical interview and receive feedback after every response."
    >
      <div className="space-y-8">
        <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-700 p-6 text-white shadow-lg sm:p-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-indigo-100">
              <Mic size={14} /> Guided practice mode
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Build confidence before the real interview.</h2>
            <p className="max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
              Select a technical track, work through a focused interview, and keep your completed score in PrepPilot.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Choose your interview track</h2>
              <p className="mt-1 text-sm text-slate-600">Each session currently includes three focused questions.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {TOPICS.map((topic) => (
              <Card key={topic.id} className="flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
                    {topic.difficulty}
                  </span>
                  <span className="text-xs font-medium text-slate-500">{topic.questions.length} questions</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{topic.description}</p>
                <Button
                  className="mt-6 w-full"
                  onClick={() => navigate(`/practice/session/${encodeURIComponent(topic.title)}`)}
                >
                  Start this mock
                  <ArrowRight size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-3">
          <div className="flex gap-3 text-sm text-slate-600"><Clock3 className="shrink-0 text-indigo-600" size={20} /> No artificial timer while you are learning.</div>
          <div className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="shrink-0 text-indigo-600" size={20} /> Submit each answer before continuing.</div>
          <div className="flex gap-3 text-sm text-slate-600"><ShieldCheck className="shrink-0 text-indigo-600" size={20} /> Completed sessions are saved to your progress.</div>
        </section>
      </div>
    </PageLayout>
  );
}
