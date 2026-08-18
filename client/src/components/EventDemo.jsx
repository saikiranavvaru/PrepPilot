import { useState } from 'react'

function EventDemo() {
    const [started, setStarted] = useState(false)

    function handleStart() {
        setStarted(true)
    }

    return (
        <section>
            <h2>Interview Practice</h2>

            <p>
                {started
                    ? 'Practice has started!'
                    : 'Ready to begin?'}
            </p>

            <button onClick={handleStart}>
                Start Practice
            </button>
        </section>
    )
}

export default EventDemo