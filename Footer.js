function Footer() {
    return (
        <footer data-name="footer" className="mt-12 py-6 border-t border-blue-100">
            <div data-name="footer-content" className="container mx-auto px-4 text-center">
                <p data-name="copyright" className="text-sm text-blue-600 mb-2">
                    © 2024 YouTube Title Analyzer. All rights reserved.
                </p>
                <p data-name="attribution" className="text-sm bg-blue-600 inline-block px-4 py-2 rounded">
                    Site developed by{' '}
                    <a 
                        href="https://1steg.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                    >
                        1STEG
                    </a>
                </p>
            </div>
        </footer>
    );
}
