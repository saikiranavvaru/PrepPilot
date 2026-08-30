import { Link, useParams } from 'react-router-dom'

import PracticePanel from '../components/PracticePanel'
import topics from '../data/topics'
import PageLayout from '../components/PageLayout'

function PracticeSession() {
    const { topicTitle } = useParams()

    const topic = topics.find(
        (item) => item.id === topicTitle
    )

    if (!topic) {
        return (
            <PageLayout>
                <main className="mx-auto w-full max-w-5xl px-4 py-8">
                    <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            Practice Session
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Practice topic not found.
                        </p>

                        <Link
                            to="/practice"
                            className="mt-5 inline-block rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
                        >
                            Back to Practice
                        </Link>
                    </section>
                </main>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <main className="mx-auto w-full max-w-5xl px-4 py-8">
                <PracticePanel topic={topic} />
            </main>
        </PageLayout>
    )
}

export default PracticeSession