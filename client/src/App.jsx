import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import PracticeSession from './pages/PracticeSession'
import AppLayout from './components/AppLayout'
import Register from './pages/Register'
import Login from './pages/Login'
import ApiTest from './ApiTest'

function App() {
    const { user, isAuthenticated, isLoading } = useAuth()

    return (
        <>
            <p>Loading: {String(isLoading)}</p>
            <p>Authenticated: {String(isAuthenticated)}</p>
            <p>User: {user ? user.name : 'Not logged in'}</p>

            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/practice" element={<Practice />} />
                        <Route
                            path="/practice/session/:topicTitle"
                            element={<PracticeSession />}
                        />
                        <Route path="/progress" element={<Progress />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/api-test" element={<ApiTest />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </>
    )
}

export default App