import Button from "./Button";

export default function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        !
      </div>

      <h3 className="text-lg font-semibold text-red-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-red-700">
        {description}
      </p>

      {onRetry && (
        <Button
          variant="outline"
          className="mt-5"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </div>
  );
}