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
    return (
        <main>
            <Navbar title="PrepPilot" />

            <WelcomeSection name="Salva" />

            <TopicSection topics={topics} />

            <p>Interview preparation, built smarter.</p>

            <Footer />
        </main>
    )
}

export default App