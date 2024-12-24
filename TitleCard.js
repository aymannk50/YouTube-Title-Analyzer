function TitleCard({ title, isBest }) {
    return (
        <div 
            data-name="title-card"
            className={`card p-4 mb-4 ${isBest ? 'best-title' : 'bg-white'}`}
        >
            <div className="flex justify-between items-start">
                <h3 data-name="suggested-title" className="text-lg font-semibold mb-2">
                    {isBest && <span data-name="trophy-icon" className="mr-2">🏆</span>}
                    {title}
                </h3>
            </div>
            <p data-name="character-count" className="text-sm">
                Characters: {title.length}/70
            </p>
        </div>
    );
}
