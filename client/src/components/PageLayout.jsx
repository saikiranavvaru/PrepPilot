function PageLayout({ title, description, children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      {(title || description) && (
        <header className="mb-8">
          {title && (
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
          )}

          {description && (
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              {description}
            </p>
          )}
        </header>
      )}

      {children}
    </div>
  );
}

export default PageLayout;