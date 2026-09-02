export default function ProgressBar({
  value = 0,
  max = 100,
  showLabel = false,
}) {
  const percentage = Math.min(
    100,
    Math.max(0, (value / max) * 100)
  );

  return (
    <div className="w-full">
      {showLabel && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-600">Progress</span>
          <span className="font-medium text-slate-900">
            {Math.round(percentage)}%
          </span>
        </div>
      )}

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}