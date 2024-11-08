import { useState } from "react";
import "../app/globals.css";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";


export default function Search() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = async () => {
        if (!query) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
            if (!res.ok) throw new Error("Failed to fetch books");
            const data = await res.json();
            setBooks(data.docs);
        } catch (err) {
            setError("Error fetching books. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
            <div className="flex items-center justify-center mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    />
                </svg>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">BookQuest</h1>
            </div>

            {/* Search Bar */}
            <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />

            {/* Error Message */}
            {error && <p className="mt-4 text-red-500">{error}</p>}

            {/* Loading Indicator */}
            {loading && <p className="mt-4 text-blue-500">Loading...</p>}

            {/* Book Results */}
            <BookList books={books} />
        </div>
    );
}
