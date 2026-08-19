import { useState } from 'react'

import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import TopicSection from './components/TopicSection'
import Footer from './components/Footer'
import PracticePanel from './components/PracticePanel'
import topics from './data/topics'

function App() {
     const [selectedTopic, setSelectedTopic] = useState(null)
     
    return (
        <main>
            <Navbar title="PrepPilot" />

            <WelcomeSection name="Salva" />

            <TopicSection
                topics={topics}
                onSelectTopic={setSelectedTopic}
            />

            {selectedTopic && (
                <PracticePanel topic={selectedTopic} />
            )}

            <Footer />
        </main>
    )
}

export default App