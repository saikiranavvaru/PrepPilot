import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const { user, isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate('/login')
    }

    return (
        <nav className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'active' : ''
                }
            >
                PrepPilot
            </NavLink>

            {isAuthenticated ? (
                <>
                    <NavLink
                        to="/practice"
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        Practice
                    </NavLink>

                    <NavLink
                        to="/progress"
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        Progress
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        Profile
                    </NavLink>

                    <span className="break-words">
                        Welcome, {user?.name}
                    </span>

                    <button
                        type="button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        Register
                    </NavLink>
                </>
            )}
        </nav>
    )
}

export default Navbar