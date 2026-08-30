function StatCard({ label, value, description }) {
    return (
        <section className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-sm font-medium text-gray-600">
                {label}
            </h3>

            <p className="mt-2 text-2xl font-bold">
                {value}
            </p>

            {description && (
                <p className="mt-2 text-sm text-gray-600">
                    {description}
                </p>
            )}
        </section>
    )
}

export default StatCard