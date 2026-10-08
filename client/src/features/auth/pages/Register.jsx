import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Eye, EyeOff, KeyRound, Loader2, UserRound } from "lucide-react";

import { registerUser } from "../auth.api";
import AuthShell from "../components/AuthShell";
import { getPasswordChecks, normalizeIdentifier, validateIdentifier, validateName, validatePassword } from "../../../shared/lib/validation";

export default function Register() {
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const passwordChecks = getPasswordChecks(password);

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    const nameError = validateName(name);
    const identifierError = validateIdentifier(identifier);
    const passwordError = validatePassword(password);
    if (nameError) nextErrors.name = nameError;
    if (identifierError) nextErrors.identifier = identifierError;
    if (passwordError) nextErrors.password = passwordError;
    if (password !== confirmPassword) nextErrors.confirmPassword = "Passwords do not match.";
    if (!acceptedTerms) nextErrors.terms = "Please accept the terms to create your account.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const normalizedIdentifier = normalizeIdentifier(identifier);
    setIsLoading(true);
    try {
      await registerUser({ name: name.trim(), password, ...(normalizedIdentifier.includes("@") ? { email: normalizedIdentifier } : { phone: normalizedIdentifier }) });
      navigate("/login", { replace: true, state: { message: "Account created. Sign in to start preparing." } });
    } catch (requestError) {
      setErrors({ form: requestError.message || "We could not create your account. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthShell active="signup">
      <div><h1 className="text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl">Create your account.</h1><p className="mt-3 text-base text-slate-600">Start your interview practice in one place.</p></div>
      <form className="mt-7 space-y-4" onSubmit={handleSubmit} noValidate>
        <div><label htmlFor="name" className="text-sm font-bold text-slate-800">Your name</label><div className="relative mt-2"><UserRound size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input id="name" value={name} onChange={(event) => { setName(event.target.value); setErrors((current) => ({ ...current, name: "" })); }} autoComplete="name" placeholder="What should we call you?" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" /></div>{errors.name && <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.name}</p>}</div>
        <div><label htmlFor="identifier" className="text-sm font-bold text-slate-800">Email or mobile number</label><input id="identifier" value={identifier} onChange={(event) => { setIdentifier(event.target.value); setErrors((current) => ({ ...current, identifier: "" })); }} autoComplete="username" placeholder="you@example.com or +919876543210" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" />{errors.identifier && <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.identifier}</p>}</div>
        <div><label htmlFor="password" className="text-sm font-bold text-slate-800">Create password</label><div className="relative mt-2"><KeyRound size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => { setPassword(event.target.value); setErrors((current) => ({ ...current, password: "" })); }} autoComplete="new-password" placeholder="Make it strong" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-700">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>{errors.password && <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.password}</p>}<div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">{passwordChecks.map((item) => <span key={item.label} className={`flex items-center gap-1.5 text-[11px] font-medium ${item.passed ? "text-emerald-700" : "text-slate-400"}`}><span className={`grid h-3.5 w-3.5 place-items-center rounded-full ${item.passed ? "bg-emerald-500 text-white" : "bg-slate-200 text-transparent"}`}><Check size={10} /></span>{item.label}</span>)}</div></div>
        <div><label htmlFor="confirm-password" className="text-sm font-bold text-slate-800">Confirm password</label><input id="confirm-password" type="password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value); setErrors((current) => ({ ...current, confirmPassword: "" })); }} autoComplete="new-password" placeholder="Repeat your password" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" />{errors.confirmPassword && <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.confirmPassword}</p>}</div>
        <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-xs leading-5 text-slate-600"><input type="checkbox" checked={acceptedTerms} onChange={(event) => { setAcceptedTerms(event.target.checked); setErrors((current) => ({ ...current, terms: "" })); }} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />I agree to PrepPilot’s responsible-use terms.</label>
        {errors.terms && <p className="text-xs font-medium text-rose-600">{errors.terms}</p>}{errors.form && <p role="alert" className="rounded-xl bg-rose-50 px-3 py-2.5 text-sm font-medium text-rose-700">{errors.form}</p>}
        <button type="submit" disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">{isLoading ? <><Loader2 size={18} className="animate-spin" /> Creating account...</> : "Create account"}</button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-600">Already have an account? <Link to="/login" className="font-bold text-indigo-700 hover:text-indigo-800">Sign in</Link></p>
    </AuthShell>
  );
}
