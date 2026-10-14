function PageLayout({ title, description, children, wide = false }) {
  return (
    <div className={`w-full px-4 py-7 sm:px-7 lg:px-10 xl:px-12 ${wide ? "max-w-none" : "mx-auto max-w-5xl"}`}>
      {(title || description) && (
        <header className="mb-8">
          {title && (
            <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              {title}
            </h1>
          )}

          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
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
