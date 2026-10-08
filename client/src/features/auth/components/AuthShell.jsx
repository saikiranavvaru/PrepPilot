import { Link } from "react-router-dom";

import { BrandMark } from "../../../shared/brand";
import AuthIllustration from "./AuthIllustration";

export default function AuthShell({ children, active = "signin" }) {
  const creatingAccount = active === "signup";

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <Link to="/" aria-label="PrepPilot home"><BrandMark /></Link>
        <p className="text-sm font-medium text-slate-600">
          {creatingAccount ? "Already have an account?" : "New to PrepPilot?"}{" "}
          <Link to={creatingAccount ? "/login" : "/register"} className="font-bold text-indigo-700 transition hover:text-indigo-900">
            {creatingAccount ? "Sign in" : "Create account"}
          </Link>
        </p>
      </header>

      <div className="relative mx-auto grid min-h-[calc(100vh-5.5rem)] max-w-7xl items-center gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10 lg:pb-16">
        <section className="relative z-10 mx-auto w-full max-w-md lg:mx-0">{children}</section>
        <section className="relative hidden min-w-0 lg:block">
          <AuthIllustration />
        </section>
      </div>
    </main>
  );
}
