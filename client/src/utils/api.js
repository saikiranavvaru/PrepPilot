const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem('preppilot_token')

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    }

    // Attach JWT when the user is logged in.
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
        body: options.body
            ? JSON.stringify(options.body)
            : undefined
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'API request failed.')
    }

    return {
        response,
        data
    }
}