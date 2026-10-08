import { ArrowRight, Bookmark } from "lucide-react";

import Card from "../Card";
import Badge from "../Badge";

const topics = [
  {
    title: "JavaScript",
    description: "Core concepts and interview questions",
    difficulty: "Intermediate",
    questions: 32,
  },
  {
    title: "React",
    description: "Hooks, state, architecture and patterns",
    difficulty: "Intermediate",
    questions: 28,
  },
  {
    title: "SQL",
    description: "Queries, joins, indexes and optimization",
    difficulty: "Beginner",
    questions: 24,
  },
];

export default function RecommendedTopics() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recommended for You
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Topics selected based on your preparation.
          </p>
        </div>

        <button className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-700 sm:block">
          View all
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card
            key={topic.title}
            className="transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-slate-500">
                  {topic.description}
                </p>
              </div>

              <button
                aria-label={`Bookmark ${topic.title}`}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <Bookmark size={17} />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <Badge
                variant={
                  topic.difficulty === "Beginner"
                    ? "success"
                    : "info"
                }
              >
                {topic.difficulty}
              </Badge>

              <span className="text-xs text-slate-500">
                {topic.questions} questions
              </span>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
              Practice
              <ArrowRight size={15} />
            </button>
          </Card>
        ))}
      </div>
    </section>
  );
}