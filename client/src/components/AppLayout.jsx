import Navbar from './Navbar'
import Footer from './Footer'

function AppLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default AppLayout