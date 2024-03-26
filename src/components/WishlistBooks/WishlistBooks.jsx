import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlistFromLS } from "../../Utils/WishlistLS";

const WishlistBooks = () => {
    const books = useLoaderData();
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        const storedWishlistIds = getWishlistFromLS();
        console(storedWishlistIds)
        if(storedWishlistIds){
            const storedWishlist = books?.filter(book=>storedWishlistIds.includes(book.bookId));
            setWishlist(storedWishlist)
        }
    }, [])
    console.log(wishlist)

    return (
        <div className="grid gap-4 my-4">
            {
                // readbooks?.map(book=><ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default WishlistBooks;