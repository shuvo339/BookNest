import { toast } from 'react-toastify';

const getReadBooksFromLS =()=>{
    const storedReadBooksIds = localStorage.getItem('read-books');
    if(storedReadBooksIds){
        return JSON.parse(storedReadBooksIds);
    }
    return [];
}

const saveReadBooksToLS=id=>{
    const storedReadBooksIds = getReadBooksFromLS();
    const exists = storedReadBooksIds?.find(bookId=> bookId==id);
    if(!exists){
        storedReadBooksIds.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooksIds))
        toast.success('Book added to Read List')
    }
    else{
        toast.error('Already Exists to Read Books')
    }
}

export {getReadBooksFromLS, saveReadBooksToLS}