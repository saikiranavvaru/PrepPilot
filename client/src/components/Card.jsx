function Card({ title, children }) {
    return (
        <section className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
                {title}
            </h2>

            <div className="space-y-3">
                {children}
            </div>
        </section>
    )
}

export default Card