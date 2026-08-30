import { useState } from 'react'

function PracticePanel({ topic }) {
    const [isStarted, setIsStarted] = useState(false)
    const [answer, setAnswer] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isCompleted, setIsCompleted] = useState(false)
    const [completedQuestions, setCompletedQuestions] = useState(0)
    const [showSummary, setShowSummary] = useState(false)

    function handleStartPractice() {
        setIsStarted(true)
        setShowSummary(false)
        setIsCompleted(false)
        setCurrentQuestion(0)
        setAnswer('')
        setIsSubmitted(false)
        setError('')
        setCompletedQuestions(0)
    }

    function handleEndPractice() {
        setIsStarted(false)
        setShowSummary(true)
    }

    function handleAnswerChange(event) {
        setAnswer(event.target.value)
        setError('')
        setIsSubmitted(false)
    }

    function handleSubmitAnswer(event) {
        event.preventDefault()

        if (isSubmitted) {
            return
        }

        if (answer.trim() === '') {
            setError('Please write an answer before submitting.')
            return
        }

        setError('')
        setIsSubmitted(true)

        setCompletedQuestions((prev) =>
            Math.min(prev + 1, topic.questions.length)
        )
    }

    function handleNextQuestion() {
        setCurrentQuestion(currentQuestion + 1)
        setAnswer('')
        setIsSubmitted(false)
        setError('')
    }

    function handleCompletePractice() {
        setIsCompleted(true)
    }

    return (
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="border-b border-gray-200 pb-5">
                <p className="text-sm font-medium text-gray-500">
                    Selected Topic
                </p>

                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                    {topic.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                    {topic.description}
                </p>
            </div>

            {!isStarted ? (
                <div className="pt-6">
                    <button
                        type="button"
                        onClick={handleStartPractice}
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50 sm:w-auto"
                    >
                        Start Practice
                    </button>
                </div>
            ) : isCompleted ? (
                <section className="pt-6">
                    <div className="rounded-lg border border-gray-200 p-5">
                        <h3 className="text-xl font-semibold">
                            Practice Complete!
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            You completed all questions for {topic.title}.
                        </p>

                        <p className="mt-3 text-sm font-medium">
                            Questions Completed:{' '}
                            {completedQuestions} / {topic.questions.length}
                        </p>

                        <button
                            type="button"
                            onClick={handleEndPractice}
                            className="mt-5 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
                        >
                            End Practice
                        </button>
                    </div>
                </section>
            ) : (
                <section className="pt-6">
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold">
                            Practice Question
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Question {currentQuestion + 1} of{' '}
                            {topic.questions.length}
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
                        <p className="text-base font-medium leading-7">
                            {topic.questions[currentQuestion]}
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmitAnswer}
                        className="mt-6"
                    >
                        <label
                            htmlFor="answer"
                            className="block text-sm font-medium"
                        >
                            Your Answer
                        </label>

                        <textarea
                            id="answer"
                            value={answer}
                            onChange={handleAnswerChange}
                            placeholder="Write your answer here..."
                            rows="6"
                            disabled={isSubmitted}
                            className="mt-2 block w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500 disabled:bg-gray-100"
                        />

                        {!isSubmitted && (
                            <button
                                type="submit"
                                className="mt-4 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50 sm:w-auto"
                            >
                                Submit Answer
                            </button>
                        )}

                        {error && (
                            <p
                                role="alert"
                                className="mt-3 text-sm font-medium"
                            >
                                {error}
                            </p>
                        )}
                    </form>

                    {isSubmitted && (
                        <p className="mt-4 text-sm font-medium">
                            Answer submitted successfully!
                        </p>
                    )}

                    {isSubmitted &&
                        currentQuestion <
                            topic.questions.length - 1 && (
                            <button
                                type="button"
                                onClick={handleNextQuestion}
                                className="mt-4 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50 sm:w-auto"
                            >
                                Next Question
                            </button>
                        )}

                    {isSubmitted &&
                        currentQuestion ===
                            topic.questions.length - 1 && (
                            <button
                                type="button"
                                onClick={handleCompletePractice}
                                className="mt-4 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50 sm:w-auto"
                            >
                                Complete Practice
                            </button>
                        )}

                    <div className="mt-5 border-t border-gray-200 pt-5">
                        <button
                            type="button"
                            onClick={handleEndPractice}
                            className="text-sm font-medium underline"
                        >
                            End Practice
                        </button>
                    </div>
                </section>
            )}

            {showSummary && (
                <section className="mt-6 border-t border-gray-200 pt-6">
                    <div className="rounded-lg border border-gray-200 p-5">
                        <h3 className="text-xl font-semibold">
                            Practice Summary
                        </h3>

                        <p className="mt-3 text-sm">
                            Questions Completed:{' '}
                            {completedQuestions} / {topic.questions.length}
                        </p>

                        <button
                            type="button"
                            onClick={handleStartPractice}
                            className="mt-5 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50 sm:w-auto"
                        >
                            Start New Practice
                        </button>
                    </div>
                </section>
            )}
        </section>
    )
}

export default PracticePanel