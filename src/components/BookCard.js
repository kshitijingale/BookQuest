import React from "react";

function BookCard({ book }) {
    const coverImage = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150?text=No+Cover+Available";

    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
            <img
                src={coverImage}
                alt={book.title}
                className="w-full h-60 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">
                {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
            </p>
        </div>
    );
}

export default BookCard;
