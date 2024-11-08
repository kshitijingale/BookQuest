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
            {/* <h1 className="text-3xl font-bold mb-6 underline">BookQuest</h1> */}
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
            {/* <div className="w-full max-w-lg">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a book"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={fetchBooks}
                    className="w-full mt-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </div> */}

            <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />



            {/* Error Message */}
            {error && <p className="mt-4 text-red-500">{error}</p>}

            {/* Loading Indicator */}
            {loading && <p className="mt-4 text-blue-500">Loading...</p>}

            {/* Book Results */}
            {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div
                            key={book.key}
                            className="border border-gray-300 p-4 rounded-lg shadow-md bg-white"
                        >
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                alt={book.title}
                                className="w-full h-64 object-cover mb-4 rounded"
                            />
                            <h3 className="text-xl font-semibold">{book.title}</h3>
                            <p className="text-gray-600">{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No books found. Try another search.</p>
                )}
            </div> */}

            <BookList books={books} />
        </div>
    );
}
