import {
  Brain,
  Flame,
  Target,
  Trophy,
} from "lucide-react";

import Card from "../Card";

const stats = [
  {
    label: "Interviews",
    value: "8",
    description: "Completed",
    icon: Brain,
  },
  {
    label: "Questions",
    value: "124",
    description: "Practiced",
    icon: Target,
  },
  {
    label: "Current Streak",
    value: "7",
    description: "Days",
    icon: Flame,
  },
  {
    label: "Overall Progress",
    value: "68%",
    description: "Keep going",
    icon: Trophy,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.label}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Icon size={19} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}