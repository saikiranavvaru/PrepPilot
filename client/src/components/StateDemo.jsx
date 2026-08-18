import { useState } from 'react'

function StateDemo() {
    const [count, setCount] = useState(0)

    return (
        <section>
            <h2>State Demo</h2>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </section>
    )
}

export default StateDemo