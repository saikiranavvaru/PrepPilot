import TopicCard from './TopicCard'

function InterviewTopic({ title, description }) {
    return (
        <TopicCard>
            <h3>{title}</h3>
            <p>{description}</p>
        </TopicCard>
    )
}

export default InterviewTopic