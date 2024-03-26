import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }, [])
    return (
        <div className="mt-20 mb-6">
            <h2 className="text-center text-4xl font-bold mb-10">Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books?.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;