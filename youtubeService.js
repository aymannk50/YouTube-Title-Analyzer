async function scrapeYouTubeResults(searchTerm) {
    try {
        // Simulate YouTube scraping with mock data for demonstration
        const mockData = Array.from({ length: 15 }, (_, i) => ({
            title: `Sample YouTube Video Title ${i + 1} about ${searchTerm}`,
            views: Math.floor(Math.random() * 1000000) + 100000
        }));

        return mockData.sort((a, b) => b.views - a.views);
    } catch (error) {
        reportError(error);
        throw error;
    }
}
