import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

function TopicCard({
  title,
  description,
  difficulty = "Beginner",
  questionCount = 0,
  progress = 0,
}) {
  const navigate = useNavigate();

  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const completedQuestions = Math.round(
    (questionCount * safeProgress) / 100
  );

  function handleStartPractice() {
    navigate(`/practice/session/${encodeURIComponent(title)}`);
  }

  return (
    <Card className="group flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <BookOpen size={22} />
        </div>

        <Badge>{difficulty}</Badge>
      </div>

      {/* Topic information */}
      <div className="mt-5 flex-1">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Metadata */}
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CircleHelp size={16} />
            {questionCount} questions
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            {completedQuestions} completed
          </span>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">
              Your progress
            </span>

            <span className="font-semibold text-indigo-600">
              {safeProgress}%
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-label={`${title} progress`}
            aria-valuenow={safeProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Action */}
      <Button
        className="mt-6 w-full"
        onClick={handleStartPractice}
      >
        {safeProgress > 0 ? "Continue Practice" : "Start Practice"}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Button>
    </Card>
  );
}

export default TopicCard;