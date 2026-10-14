import { useEffect, useMemo, useState } from "react";
import { Loader2, Search, SlidersHorizontal } from "lucide-react";

import { getInterviewTopics } from "../../interviews/interview.api";
import PageLayout from "../../../shared/layout/PageLayout";
import TopicCard from "../../../shared/ui/TopicCard";

export default function Practice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadTopics() {
      try {
        setIsLoading(true);
        setError("");
        const data = await getInterviewTopics();

        if (!isMounted) return;

        setTopics(
          data.map((topic) => ({
            slug: topic.slug,
            title: topic.name,
            description: topic.description,
            difficulty: "Mixed",
            questionCount: topic.questionCount,
            progress: 0,
          }))
        );
      } catch (requestError) {
        if (!isMounted) return;
        setError(requestError.message || "Unable to load practice topics.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadTopics();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return topics;

    return topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query)
    );
  }, [searchQuery, topics]);

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
                Every topic is loaded from the PrepPilot question catalog.
              </p>
            </div>
          </div>

          <div className="relative mt-6">
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
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Practice Topics</h2>
            {!isLoading && (
              <p className="text-sm text-slate-500">
                {filteredTopics.length} {filteredTopics.length === 1 ? "topic" : "topics"}
              </p>
            )}
          </div>

          {isLoading ? (
            <div className="flex min-h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white">
              <Loader2 className="h-7 w-7 animate-spin text-indigo-600" />
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center">
              <h3 className="text-lg font-semibold text-red-950">Topics are unavailable</h3>
              <p className="mt-2 text-sm text-red-700">{error}</p>
            </div>
          ) : filteredTopics.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredTopics.map((topic) => (
                <TopicCard key={topic.slug} {...topic} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <h3 className="text-lg font-semibold text-slate-900">No topics found</h3>
              <p className="mt-2 text-sm text-slate-600">Try a different search term.</p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
}
