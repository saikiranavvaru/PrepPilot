function InterviewTopic({ title, description, onSelect }) {
    return (
        <section>
            <h3>{title}</h3>

            <p>{description}</p>

            <button onClick={onSelect}>
                Select Topic
            </button>
        </section>
    )
}

export default InterviewTopic