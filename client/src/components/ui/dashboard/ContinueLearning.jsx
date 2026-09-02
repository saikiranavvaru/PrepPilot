import { ArrowRight, BookOpen } from "lucide-react";

import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";

export default function ContinueLearning() {
  return (
    <Card>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <BookOpen size={21} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
              Continue learning
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              React Interview Preparation
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              18 of 25 lessons completed
            </p>
          </div>
        </div>

        <Button variant="outline" className="w-full sm:w-auto">
          Continue
          <ArrowRight size={15} />
        </Button>
      </div>

      <div className="mt-6">
        <ProgressBar value={72} showLabel />
      </div>
    </Card>
  );
}