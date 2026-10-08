export default function Card({
  title,
  children,
  className = "",
  padding = true,
}) {
  return (
    <div
      className={`
        rounded-2xl
        border border-slate-200
        bg-white
        shadow-sm
        ${padding ? "p-5" : ""}
        ${className}
      `}
    >
      {title && <h2 className="mb-4 text-xl font-semibold text-slate-900">{title}</h2>}
      {children}
    </div>
  );
}
