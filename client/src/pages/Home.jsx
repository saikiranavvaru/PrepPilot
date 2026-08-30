import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Card from '../components/Card'
import StatCard from '../components/StatCard'
import topics from '../data/topics'
import PageLayout from '../components/PageLayout'

function Home() {
    const { user, isAuthenticated } = useAuth()

    const availableQuestionCount = 3

    return (
        <PageLayout>
            {isAuthenticated ? (
                <>
                    <section className="mb-6">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            Welcome, {user?.name}
                        </h1>

                        <p className="mt-2 text-sm sm:text-base">
                            Prepare smarter. Practice better.
                            Perform with confidence.
                        </p>
                    </section>

                    <div className="space-y-6">
                        <Card title="Your Account">
                            <div className="space-y-2">
                                <p>
                                    Name: {user?.name}
                                </p>

                                <p className="break-words">
                                    Email: {user?.email}
                                </p>
                            </div>
                        </Card>

                        <Card title="Interview Preparation">
                            <p>
                                Continue preparing for your technical
                                interviews with PrepPilot.
                            </p>
                        </Card>

                        <Card title="Preparation Overview">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <StatCard
                                    label="Practice Topics"
                                    value={topics.length}
                                    description="Topics currently available to practice."
                                />

                                <StatCard
                                    label="Questions per Practice Session"
                                    value={availableQuestionCount}
                                    description="Questions currently available in each practice session."
                                />

                                <StatCard
                                    label="Your Progress"
                                    value="Not recorded yet"
                                    description="Practice history will appear here after it is saved by the backend."
                                />
                            </div>
                        </Card>

                        <Card title="Quick Actions">
                            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <Link
                                    to="/practice"
                                    className="inline-block"
                                >
                                    Practice
                                </Link>

                                <Link
                                    to="/progress"
                                    className="inline-block"
                                >
                                    View Progress
                                </Link>

                                <Link
                                    to="/profile"
                                    className="inline-block"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </Card>
                    </div>
                </>
            ) : (
                <>
                    <section className="mb-6">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            Welcome to PrepPilot
                        </h1>

                        <p className="mt-2 text-sm sm:text-base">
                            Prepare smarter. Practice better.
                            Perform with confidence.
                        </p>
                    </section>

                    <Card title="Get Started">
                        <p>
                            Create an account or log in to start
                            your interview preparation.
                        </p>

                        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="/login"
                                className="inline-block"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="inline-block"
                            >
                                Register
                            </Link>
                        </div>
                    </Card>
                </>
            )}
        </PageLayout>
    )
}

export default Home