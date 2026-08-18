import { useState } from 'react'

import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import TopicSection from './components/TopicSection'
import Footer from './components/Footer'

const topics = [
    {
        title: 'JavaScript',
        description:
            'Build strong JavaScript fundamentals for technical interviews.'
    },
    {
        title: 'React',
        description:
            'Practice React concepts and build interview-ready applications.'
    },
    {
        title: 'Database',
        description:
            'Strengthen SQL and database concepts for technical interviews.'
    }
]

function App() {
     const [selectedTopic, setSelectedTopic] = useState(null)
     const [practiceStarted, setPracticeStarted] = useState(false)

    return (
        <main>
            <Navbar title="PrepPilot" />

            <WelcomeSection name="Salva" />

            <TopicSection
                topics={topics}
                onSelectTopic={setSelectedTopic}
            />

            {selectedTopic && (
    <section>
        <h2>Selected Topic</h2>

        <h3>{selectedTopic.title}</h3>

        <p>{selectedTopic.description}</p>

        {!practiceStarted && (
            <button onClick={() => setPracticeStarted(true)}>
                Start Practice
            </button>
        )}

        {practiceStarted && (
            <p>Practice session started!</p>
        )}
    </section>
)}

            <Footer />
        </main>
    )
}

export default App