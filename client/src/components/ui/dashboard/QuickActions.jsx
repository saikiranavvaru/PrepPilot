import {
  Brain,
  Code2,
  FileText,
  Play,
} from "lucide-react";

import Card from "../ui/Card";

const actions = [
  {
    title: "Practice Questions",
    description: "Improve your technical skills",
    icon: Play,
  },
  {
    title: "Mock Interview",
    description: "Practice with an AI interviewer",
    icon: Brain,
  },
  {
    title: "Coding Practice",
    description: "Solve real coding problems",
    icon: Code2,
  },
  {
    title: "Resume Analysis",
    description: "Improve your resume",
    icon: FileText,
  },
];

export default function QuickActions() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Jump straight into your preparation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Card
              key={action.title}
              className="cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {action.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}