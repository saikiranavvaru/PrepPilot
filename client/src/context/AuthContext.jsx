import { createContext, useContext, useEffect, useState } from 'react'
import { apiRequest } from '../utils/api'
import { getToken, removeToken } from '../utils/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function restoreAuthentication() {
            const token = getToken()

            if (!token) {
                setIsLoading(false)
                return
            }

            try {
                const { data } = await apiRequest('/api/v1/auth/me')

                setUser(data.data)
                setIsAuthenticated(true)
            } catch (error) {
                console.error('Authentication restoration failed:', error)

                removeToken()
                setUser(null)
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }

        restoreAuthentication()
    }, [])

    function logout() {
    removeToken()
    setUser(null)
    setIsAuthenticated(false)
}
    const value = {
        user,
        isAuthenticated,
        isLoading,
        setUser,
        setIsAuthenticated,
        setIsLoading,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}