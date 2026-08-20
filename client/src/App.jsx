import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import PracticeSession from './pages/PracticeSession'
import AppLayout from './components/AppLayout'

function App() {
    return (
        <BrowserRouter>
          <AppLayout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/session/:topicTitle" element={<PracticeSession />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
    )
}

export default App