export default function BrandMark({ compact = false, variant = "light", className = "" }) {
  const wordmarkColor = variant === "dark" ? "text-white" : "text-slate-950";

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="PrepPilot">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/25">
        <span className="absolute h-7 w-7 rounded-full border-[3px] border-white/90" />
        <span className="relative text-[1.05rem] font-black leading-none tracking-[-0.08em] text-white">P</span>
      </span>
      {!compact && <span className={`text-lg font-extrabold tracking-[-0.04em] ${wordmarkColor}`}>PrepPilot</span>}
    </div>
  );
}
