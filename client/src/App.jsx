import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
    return (
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        {/* Public route */}
                        <Route path="/" element={<Home />} />

                        {/* Protected route */}
                        <Route
                            path="/practice"
                            element={
                                <ProtectedRoute>
                                    <Practice />
                                </ProtectedRoute>
                            }
                        />

                        {/* Protected route */}
                        <Route
                            path="/practice/session/:topicTitle"
                            element={
                                <ProtectedRoute>
                                    <PracticeSession />
                                </ProtectedRoute>
                            }
                        />

                        {/* Protected route */}
                        <Route
                            path="/progress"
                            element={
                                <ProtectedRoute>
                                    <Progress />
                                </ProtectedRoute>
                            }
                        />

                        {/* Protected route */}
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />

                        {/* Public routes */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/api-test" element={<ApiTest />} />

                        {/* 404 route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AppLayout>
            </BrowserRouter>
    )
}

export default App