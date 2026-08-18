import InterviewTopic from './InterviewTopic'

function TopicSection({ topics, onSelectTopic }) {
    return (
        <section>
            <h2>Interview Topics</h2>

            {topics.map((topic) => (
                <InterviewTopic
                    key={topic.title}
                    title={topic.title}
                    description={topic.description}
                    onSelect={() => onSelectTopic(topic)}
                />
            ))}
        </section>
    )
}

export default TopicSection