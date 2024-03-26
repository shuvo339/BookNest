import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlistFromLS } from "../../Utils/WishlistLS";
import WishBook from "../WishBook/WishBook";


const WishlistBooks = () => {
    const books = useLoaderData();
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        const storedWishlistIds = getWishlistFromLS();
        if(storedWishlistIds){
            const storedWishlist = books?.filter(book=>storedWishlistIds.includes(book.bookId));
            setWishlist(storedWishlist)
        }
    }, [])

    return (
        <div className="grid gap-4 my-4">
            {
                wishlist?.map(book=><WishBook key={book.bookId} book={book}></WishBook>)
            }
        </div>
    );
};

export default WishlistBooks;