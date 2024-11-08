import React from "react";

function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="w-full max-w-lg">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a book"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={onSearch}
                className="w-full mt-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
