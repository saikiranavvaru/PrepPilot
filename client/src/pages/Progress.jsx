import { Link } from 'react-router-dom'

import Card from '../components/Card'
import PageLayout from '../components/PageLayout'

function Progress() {
    return (
        <PageLayout>
            <main className="mx-auto w-full max-w-5xl px-4 py-8">
                <section className="mb-6">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Progress
                    </h1>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        Track your interview preparation progress.
                    </p>
                </section>

                <Card title="Practice History">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                        <h2 className="text-lg font-semibold">
                            No practice history yet
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Your practice progress will appear here
                            after your practice history is saved by
                            the backend.
                        </p>

                        <Link
                            to="/practice"
                            className="mt-5 inline-block rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-white"
                        >
                            Start Practice
                        </Link>
                    </div>
                </Card>
            </main>
        </PageLayout>
    )
}

export default Progress