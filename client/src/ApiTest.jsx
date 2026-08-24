import { useEffect, useState } from 'react'
import { apiRequest } from './utils/api'

function ApiTest() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
    apiRequest('/api/v1/users')
        .then(({ response, data }) => {
            console.log('Status:', response.status)
            console.log('Users API Response:', data)

            setUsers(data.data)
            setError('')
        })
        .catch((error) => {
            console.error('Users API request failed:', error)

            setError('Failed to load users.')
        })
        .finally(() => {
            setIsLoading(false)
        })
}, [])

    return (
    <section>
        <h1>API Test</h1>

        <h2>Users from PrepPilot API</h2>

        {isLoading ? (
    <p>Loading users...</p>
) : error ? (
    <p>{error}</p>
) : (
    users.map((user) => (
        <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    ))
)}
    </section>
)
}

export default ApiTest