import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  Video,
  BarChart3,
  User,
  Settings,
  LogOut,
  Search,
  Bell,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Mock Preparation", path: "/practice", icon: BookOpen },
    { label: "Mock Interview", path: "/mock-interview", icon: Video },
    { label: "Progress", path: "/progress", icon: BarChart3 },
    { label: "Profile", path: "/profile", icon: User },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/" || location.pathname === "/dashboard"
      : location.pathname.startsWith(path);

  const userInitial = user?.name?.trim()?.charAt(0)?.toUpperCase() || "P";

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      {/* Left Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-slate-200 bg-white p-4 select-none md:flex">
        <div>
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-3 py-4 mb-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              P
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              PrepPilot
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-indigo-50 text-indigo-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions / Logout */}
        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main View Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top Header with Search Bar */}
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 md:hidden" aria-label="PrepPilot home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">P</span>
            <span className="font-bold tracking-tight text-slate-900">PrepPilot</span>
          </Link>

          <div className="relative hidden w-80 md:block">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Topic search is coming soon"
              aria-label="Search topics and questions"
              readOnly
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="Notifications"
              title="Notifications will appear here when enabled"
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Bell size={20} />
            </button>
            <Link
              to="/profile"
              className="flex items-center gap-2.5 hover:opacity-80 transition"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs" aria-label="Open profile">
                {userInitial}
              </div>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>

        <nav className="sticky bottom-0 z-10 grid grid-cols-5 border-t border-slate-200 bg-white px-1 py-1 md:hidden" aria-label="Mobile navigation">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex min-w-0 flex-col items-center gap-1 rounded-lg px-1 py-2 text-[10px] font-medium ${
                  isActive(item.path) ? "text-indigo-600" : "text-slate-500"
                }`}
              >
                <Icon size={18} />
                <span className="truncate">{item.label === "Mock Preparation" ? "Practice" : item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
