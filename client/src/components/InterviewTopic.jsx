function InterviewTopic({ title, description, onSelect }) {
    return (
        <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                {description}
            </p>

            <button
                type="button"
                onClick={onSelect}
                className="mt-5 w-full rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
            >
                Select Topic
            </button>
        </article>
    )
}

export default InterviewTopic