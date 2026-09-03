import { CheckCircle2, Clock3 } from "lucide-react";

import Card from "../Card";

const activities = [
  {
    title: "React Practice",
    detail: "Completed 10 questions",
    time: "Today",
  },
  {
    title: "JavaScript Practice",
    detail: "Scored 82%",
    time: "Yesterday",
  },
  {
    title: "SQL Practice",
    detail: "Completed 8 questions",
    time: "2 days ago",
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest preparation activity.
          </p>
        </div>

        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {activities.map((activity) => (
          <div
            key={`${activity.title}-${activity.time}`}
            className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900">
                {activity.title}
              </p>

              <p className="mt-1 truncate text-xs text-slate-500">
                {activity.detail}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1 text-xs text-slate-400">
              <Clock3 size={13} />
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}