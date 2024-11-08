import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
            {books.length > 0 ? (
                books.map((book) => <BookCard key={book.key} book={book} />)
            ) : (
                <p className="col-span-full text-center text-gray-500">
                    No books found. Try another search.
                </p>
            )}
        </div>
    );
}

export default BookList;
