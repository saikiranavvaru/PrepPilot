import { useNavigate } from 'react-router-dom'
import TopicSection from '../components/TopicSection'
import topics from '../data/topics'
import PageLayout from '../components/PageLayout'

function Practice() {
    const navigate = useNavigate()

    function handleSelectTopic(topic) {
        navigate(`/practice/session/${topic.id}`)
    }

    return (
        <PageLayout>
            <section>
                <h1 className="text-2xl font-bold sm:text-3xl">
                    Practice
                </h1>

                <TopicSection
                    topics={topics}
                    onSelectTopic={handleSelectTopic}
                />
            </section>
        </PageLayout>
    )
}

export default Practice