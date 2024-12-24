function VideoCard({ title, views }) {
    return (
        <div data-name="video-card" className="card bg-white p-4 mb-4">
            <h3 data-name="video-title" className="text-lg font-semibold mb-2">{title}</h3>
            <p data-name="video-views" className="text-sm">Views: {views.toLocaleString()}</p>
        </div>
    );
}
