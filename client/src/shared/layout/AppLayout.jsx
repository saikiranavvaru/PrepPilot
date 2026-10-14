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
import { useAuth } from "../../app/providers/AuthProvider";
import { BrandMark } from "../brand";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { label: "Home", path: "/dashboard", icon: Home },
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
    path === "/dashboard"
      ? location.pathname === "/dashboard"
      : location.pathname.startsWith(path);

  const userInitial = user?.name?.trim()?.charAt(0)?.toUpperCase() || "P";

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9ff] font-sans antialiased text-slate-800">
      {/* Left Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-indigo-100/70 bg-white/80 p-4 backdrop-blur-xl select-none md:flex">
        <div>
          {/* Brand Logo */}
          <div className="px-3 py-4 mb-3"><BrandMark /></div>

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
                      ? "bg-gradient-to-r from-indigo-100 to-violet-50 text-indigo-700 font-semibold shadow-sm shadow-indigo-950/5"
                      : "text-slate-600 hover:bg-indigo-50/70 hover:text-slate-900"
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
      <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[radial-gradient(circle_at_82%_8%,rgba(254,215,170,0.18),transparent_25rem),radial-gradient(circle_at_32%_0%,rgba(199,210,254,0.22),transparent_32rem)]">
        {/* Top Header */}
        <header className="sticky top-0 z-10 flex h-[72px] shrink-0 items-center justify-between bg-[#fafbff]/75 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <Link to="/dashboard" className="md:hidden" aria-label="PrepPilot home"><BrandMark /></Link>

          <Link
            to="/practice"
            className="hidden items-center gap-2 rounded-full bg-indigo-50/90 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm shadow-indigo-950/5 transition hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 md:inline-flex"
          >
            <Search size={16} />
            Find a practice topic
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              aria-label="Notifications"
              title="Notifications will appear here when enabled"
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Bell size={20} />
            </button>
            <Link
              to="/profile"
              className="rounded-full p-1 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 shadow-sm ring-2 ring-white" aria-label="Open profile">
                {userInitial}
              </div>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="app-scroll-area flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
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
