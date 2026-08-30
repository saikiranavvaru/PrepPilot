import InterviewTopic from './InterviewTopic'

function TopicSection({ topics, onSelectTopic }) {
    return (
        <section className="mt-6">
            <h2 className="mb-4 text-xl font-semibold">
                Interview Topics
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic) => (
                    <InterviewTopic
                        key={topic.title}
                        title={topic.title}
                        description={topic.description}
                        onSelect={() => onSelectTopic(topic)}
                    />
                ))}
            </div>
        </section>
    )
}

export default TopicSection