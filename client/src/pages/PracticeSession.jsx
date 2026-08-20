import { Link, useParams } from 'react-router-dom'

import PracticePanel from '../components/PracticePanel'
import topics from '../data/topics'

function PracticeSession() {
    const { topicTitle } = useParams()

    const topic = topics.find(
    (item) => item.id === topicTitle
)

    if (!topic) {
        return (
            <main>
                <h1>Practice Session</h1>

                <p>Practice topic not found.</p>

                <Link to="/practice">
                    Back to Practice
                </Link>
            </main>
        )
    }

    return (
        <main>
            <PracticePanel topic={topic} />
        </main>
    )
}

export default PracticeSession