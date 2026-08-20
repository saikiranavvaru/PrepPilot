import { useNavigate } from 'react-router-dom'

import TopicSection from '../components/TopicSection'
import topics from '../data/topics'

function Practice() {
    const navigate = useNavigate()

    function handleSelectTopic(topic) {
    navigate(`/practice/session/${topic.id}`)
}

    return (
        <main>
            <h1>Practice</h1>

            <TopicSection
                topics={topics}
                onSelectTopic={handleSelectTopic}
            />
        </main>
    )
}

export default Practice