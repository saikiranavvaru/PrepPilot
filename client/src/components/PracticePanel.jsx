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

    setCompletedQuestions(prev =>
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
        <section>
            <h2>Selected Topic</h2>

            <h3>{topic.title}</h3>

            <p>{topic.description}</p>

            {!isStarted ? (
                <button onClick={handleStartPractice}>
                    Start Practice
                </button>
            ) : isCompleted ? (
                <section>
                    <h3>Practice Complete!</h3>

                    <p>
                        You completed all questions for {topic.title}.
                    </p>

                    <p>
                        Questions Completed: {completedQuestions} / {topic.questions.length}
                    </p>

                    <button onClick={handleEndPractice}>
                        End Practice
                    </button>
                </section>
            ) : (
                <section>
                    <h3>Practice Question</h3>

                    <p>
                        Question {currentQuestion + 1} of{' '}
                        {topic.questions.length}
                    </p>

                    <p>{topic.questions[currentQuestion]}</p>

                    <form onSubmit={handleSubmitAnswer}>
                        <label htmlFor="answer">
                            Your Answer
                        </label>

                        <br />

                        <textarea
                            id="answer"
                            value={answer}
                            onChange={handleAnswerChange}
                            placeholder="Write your answer here..."
                            rows="6"
                            disabled={isSubmitted}
                        />

                        <br />

                        {!isSubmitted && (
                            <button type="submit">
                                Submit Answer
                                </button>
                            )}
                            {error && (
                                <p>{error}</p>
                            )}
                    </form>

                    {isSubmitted && (
                        <p>
                            Answer submitted successfully!
                        </p>
                    )}

                    {isSubmitted &&
                        currentQuestion <
                            topic.questions.length - 1 && (
                            <button onClick={handleNextQuestion}>
                                Next Question
                            </button>
                        )}

                    {isSubmitted &&
                        currentQuestion ===
                            topic.questions.length - 1 && (
                            <button onClick={handleCompletePractice}>
                                Complete Practice
                            </button>
                        )}

                    <button onClick={handleEndPractice}>
                        End Practice
                    </button>
                </section>
            )}
            {showSummary && (
                <section>
                    <h3>Practice Summary</h3>
                    <p>
                        Questions Completed: {completedQuestions} / {topic.questions.length}
                    </p>
                    
                    <button onClick={handleStartPractice}>
                        Start New Practice
                        </button>
                        </section>
                    )}
        </section>
    )
}

export default PracticePanel