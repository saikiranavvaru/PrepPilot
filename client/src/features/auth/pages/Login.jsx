import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, KeyRound, Loader2, Mail } from "lucide-react";

import { loginUser } from "../auth.api";
import AuthShell from "../components/AuthShell";
import { setToken } from "../../../shared/lib/auth";
import { normalizeIdentifier, validateIdentifier } from "../../../shared/lib/validation";
import { useAuth } from "../../../app/providers/AuthProvider";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setIsAuthenticated } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    const identifierError = validateIdentifier(identifier);
    if (identifierError) return setFieldError(identifierError);
    if (!password) return setError("Enter your password to continue.");
    setFieldError("");
    setError("");
    setIsLoading(true);

    try {
      const { data } = await loginUser({ identifier: normalizeIdentifier(identifier), password });
      setToken(data.data.token);
      setUser(data.data.user);
      setIsAuthenticated(true);
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError(requestError.message || "We could not sign you in. Check your details and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthShell active="signin">
      <div>
        <h1 className="text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl">Welcome back.</h1>
        <p className="mt-3 text-base text-slate-600">Sign in to continue preparing.</p>
      </div>
      {location.state?.message && <p className="mt-5 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-700">{location.state.message}</p>}
      <form className="mt-9 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="identifier" className="text-sm font-bold text-slate-800">Email or mobile number</label>
          <div className="relative mt-2"><Mail size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input id="identifier" autoComplete="username" value={identifier} onChange={(event) => { setIdentifier(event.target.value); setFieldError(""); }} placeholder="you@example.com or +919876543210" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" /></div>
          {fieldError && <p role="alert" className="mt-2 text-xs font-medium text-rose-600">{fieldError}</p>}
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-bold text-slate-800">Password</label>
          <div className="relative mt-2"><KeyRound size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} placeholder="Enter your password" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-700">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>
        </div>
        {error && <p role="alert" className="rounded-xl bg-rose-50 px-3 py-2.5 text-sm font-medium text-rose-700">{error}</p>}
        <button type="submit" disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">{isLoading ? <><Loader2 size={18} className="animate-spin" /> Signing in...</> : "Sign in"}</button>
      </form>
      <p className="mt-7 text-center text-sm text-slate-600">New to PrepPilot? <Link to="/register" className="font-bold text-indigo-700 hover:text-indigo-800">Create your account</Link></p>
    </AuthShell>
  );
}
