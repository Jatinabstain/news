import { useState } from 'react';
import Image from 'next/image';
import search from '../../../../public/assets/search.svg';

export default function Search() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Close modal when clicking outside (on the overlay)
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsSearchOpen(false);
        }
    };

    return (
        <div className="relative">
            {/* Search Button */}
            <button onClick={() => setIsSearchOpen(true)} className="pl-4 block">
                <Image
                    src={search}
                    alt="Search"
                    className='search-icon'
                />
            </button>

            {/* Full-Screen Modal */}
            {isSearchOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm"
                    onClick={handleOverlayClick} // Close modal on overlay click
                >
                    <div className="w-full max-w-3xl rounded-lg shadow-lg px-6">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-3 border shadow-none border-gray-300 rounded-lg outline-none search-input"
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-9"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
