import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }, [])
    return (
        <div>
            <h2>Books: {books.length}</h2>
        </div>
    );
};

export default Books;