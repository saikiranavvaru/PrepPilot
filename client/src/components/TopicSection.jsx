import InterviewTopic from './InterviewTopic'

function TopicSection({ topics }) {
    return (
        <section>
            <h2>Interview Topics</h2>

            {topics.map((topic) => (
                <InterviewTopic
                    key={topic.title}
                    title={topic.title}
                    description={topic.description}
                />
            ))}
        </section>
    )
}

export default TopicSection