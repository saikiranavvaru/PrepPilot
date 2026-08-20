import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'active' : ''
                }
            >
                PrepPilot
            </NavLink>

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
        </nav>
    )
}

export default Navbar