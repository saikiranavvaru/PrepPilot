export default function BrandMark({ compact = false, variant = "light", className = "" }) {
  const wordmarkColor = variant === "dark" ? "text-white" : "text-slate-950";

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="PrepPilot">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/25">
        <span className="absolute h-7 w-7 rounded-full border-[3px] border-white/90" />
        <span className="absolute h-3.5 w-3.5 translate-x-1 translate-y-1 rounded-sm bg-amber-300" />
        <span className="relative -translate-x-0.5 -translate-y-0.5 text-lg font-black italic tracking-tighter text-white">P</span>
      </span>
      {!compact && <span className={`text-lg font-extrabold tracking-[-0.04em] ${wordmarkColor}`}>PrepPilot</span>}
    </div>
  );
}
