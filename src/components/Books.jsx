import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div>
            <h2 className="text-[#131313] text-4xl font-bold text-center">Books</h2>    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-3">
                {
                    books.map(book =>
                        <Book
                            key={book.bookId}
                            book={book}
                        ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;