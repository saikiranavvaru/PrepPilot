function PageLayout({ children }) {
    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
            {children}
        </div>
    )
}

export default PageLayout