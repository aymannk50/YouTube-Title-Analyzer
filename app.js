function App() {
    const [videos, setVideos] = React.useState([]);
    const [suggestedTitles, setSuggestedTitles] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleSearch = async (searchTerm) => {
        try {
            setError(null);
            setIsLoading(true);
            const results = await scrapeYouTubeResults(searchTerm);
            setVideos(results);
            setSuggestedTitles([]);
        } catch (error) {
            setError('Failed to fetch videos: ' + error.message);
            reportError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGenerateTitles = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const newTitles = await generateTitles(videos);
            setSuggestedTitles(newTitles);
        } catch (error) {
            setError('Failed to generate titles: ' + error.message);
            reportError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div data-name="app-container">
            <main className="container mx-auto px-4 py-8">
                <h1 data-name="app-title" className="text-3xl font-bold text-center mb-8">
                    YouTube Title Analyzer
                </h1>
                
                <SearchBox onSearch={handleSearch} isLoading={isLoading} />
                
                {error && (
                    <div data-name="error-message" className="text-red-500 text-center mt-4 p-4 bg-red-50 rounded">
                        {error}
                    </div>
                )}
                
                {isLoading && <LoadingSpinner />}
                
                {videos.length > 0 && (
                    <div data-name="results-container" className="mt-8">
                        <div data-name="generate-button-container" className="text-center mb-8">
                            <button
                                data-name="generate-titles-button"
                                onClick={handleGenerateTitles}
                                className="btn-primary px-6 py-3 rounded font-semibold"
                            >
                                Create My Next Video Title
                            </button>
                        </div>
                        
                        {suggestedTitles.length > 0 && (
                            <div data-name="suggested-titles-container" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Suggested Titles</h2>
                                {suggestedTitles.map((title, index) => (
                                    <TitleCard
                                        key={index}
                                        title={title}
                                        isBest={index === 0}
                                    />
                                ))}
                            </div>
                        )}
                        
                        <div data-name="video-results-container">
                            <h2 className="text-2xl font-bold mb-4">Top Videos by Views</h2>
                            {videos.map((video, index) => (
                                <VideoCard
                                    key={index}
                                    title={video.title}
                                    views={video.views}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
