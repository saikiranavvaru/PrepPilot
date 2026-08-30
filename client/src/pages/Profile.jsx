import { useAuth } from '../context/AuthContext'

import Card from '../components/Card'
import PageLayout from '../components/PageLayout'

function Profile() {
    const { user } = useAuth()

    return (
        <PageLayout>
            <main className="mx-auto w-full max-w-5xl px-4 py-8">
                <section className="mb-6">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Profile
                    </h1>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        Manage your PrepPilot profile.
                    </p>
                </section>

                <Card title="Account Information">
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Name
                            </p>

                            <p className="mt-1 break-words">
                                {user?.name || 'Not available'}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Email
                            </p>

                            <p className="mt-1 break-words">
                                {user?.email || 'Not available'}
                            </p>
                        </div>
                    </div>
                </Card>
            </main>
        </PageLayout>
    )
}

export default Profile