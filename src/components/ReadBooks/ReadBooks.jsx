import { useEffect, useState } from "react";
import { getReadBooksFromLS } from "../../Utils/ReadBooksLS";
import { useLoaderData } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";

const ReadBooks = () => {
    const books = useLoaderData();
    const [readbooks, setReadBooks] = useState([]);
    useEffect(()=>{
        const storedReadBookIds = getReadBooksFromLS();
        if(storedReadBookIds){
            const storedReadBooks = books?.filter(book=>storedReadBookIds.includes(book.bookId));
            setReadBooks(storedReadBooks)
        }
    }, [])

    return (
        <div className="grid gap-4 my-4">
            {
                readbooks?.map(book=><ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;