import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import PageLayout from "../components/PageLayout";
import TopicCard from "../components/ui/TopicCard";

const topics = [
  {
    title: "JavaScript",
    description: "Practice JavaScript interview questions.",
    difficulty: "Intermediate",
    questionCount: 32,
    progress: 35,
  },
  {
    title: "React",
    description: "Practice React interview questions.",
    difficulty: "Intermediate",
    questionCount: 28,
    progress: 60,
  },
  {
    title: "Database",
    description: "Practice database interview questions.",
    difficulty: "Beginner",
    questionCount: 24,
    progress: 15,
  },
];

export default function Practice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" || topic.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [searchQuery, difficulty]);

  return (
    <PageLayout
      title="Practice Library"
      description="Choose a topic and practice interview questions at your own pace."
    >
      <div className="space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <SlidersHorizontal size={20} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Find your next practice topic
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Search topics, choose a difficulty level, and start practicing.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search topics..."
                aria-label="Search practice topics"
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              aria-label="Filter by difficulty"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="All">All difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Practice Topics
            </h2>

            <p className="text-sm text-slate-500">
              {filteredTopics.length}{" "}
              {filteredTopics.length === 1 ? "topic" : "topics"}
            </p>
          </div>

          {filteredTopics.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredTopics.map((topic) => (
                <TopicCard key={topic.title} {...topic} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                No topics found
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Try a different search term or difficulty level.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setDifficulty("All");
                }}
                className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
}