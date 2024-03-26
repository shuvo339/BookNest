import { toast } from 'react-toastify';
import { getReadBooksFromLS } from './ReadBooksLS';

const getWishlistFromLS =()=>{
    const storedWishlistIds = localStorage.getItem('wishlist');
    if(storedWishlistIds){
        return JSON.parse(storedWishlistIds);
    }
    return [];
}

const saveWishlistToLS=id=>{
    const storedWishlistIds = getWishlistFromLS();
    const exists = storedWishlistIds?.find(wishlistId=> wishlistId==id);
    const storedReadBookIds = getReadBooksFromLS();
    const existsInReadBook = storedReadBookIds?.find(bookId=>bookId==id);
    if(exists){
        toast.error('Already Exists in Wishlist')
    }
    else if(existsInReadBook){
        toast.error('You have Already Read this Book')
    }
    else{
        storedWishlistIds.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlistIds))
        toast.success('Successfully Added to Wishlist')
    }
    
}

export {getWishlistFromLS, saveWishlistToLS}