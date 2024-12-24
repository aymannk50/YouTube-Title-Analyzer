function SearchBox({ onSearch, isLoading }) {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onSearch(searchTerm);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="search-container" className="w-full max-w-2xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                    data-name="search-input"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter topic, keyword, or phrase..."
                    className="flex-1 p-3 border border-blue-300 rounded"
                />
                <button
                    data-name="search-button"
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary px-6 py-3 rounded font-semibold disabled:opacity-50"
                >
                    Create YouTube Topics
                </button>
            </form>
        </div>
    );
}
