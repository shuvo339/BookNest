import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { getReadBooksFromLS } from "../../Utils/ReadBooksLS";
import ReadBook from "../ReadBook/ReadBook";
import { getWishlistFromLS } from "../../Utils/WishlistLS";
import WishBook from "../WishBook/WishBook";

const ListedBooks = () => {
  
  const navigate = useNavigate();

  
  const books = useLoaderData();
  const [readbooks, setReadBooks] = useState([]);
    
  
  const handleSort=(value)=>{
      if(value==1){
        const sortedBooksRate = [...readbooks].sort((a,b)=>b.rating-a.rating);
        setReadBooks(sortedBooksRate)
        setWishlist(sortedBooksRate)
        
        
      }
     else if(value==2){
        const sortedBooksPage = [...readbooks].sort((a,b)=>b.totalPages-a.totalPages);
        setReadBooks(sortedBooksPage)
        setWishlist(sortedBooksPage)
      }
      else if(value==3){
        const sortedBooksYear = [...readbooks].sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing);
        setReadBooks(sortedBooksYear)
        setWishlist(sortedBooksYear)
      }
  }

    useEffect(()=>{
        const storedReadBookIds = getReadBooksFromLS();
        if(storedReadBookIds){
            const storedReadBooks = books?.filter(book=>storedReadBookIds.includes(book.bookId));
                setReadBooks(storedReadBooks);
            
        }
    }, [books])

    // wishlist 
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        const storedWishlistIds = getWishlistFromLS();
        if(storedWishlistIds){
            const storedWishlist = books?.filter(book=>storedWishlistIds.includes(book.bookId));
            setWishlist(storedWishlist)
        }
    }, [books])

    const handleReadBooks=()=>{
      navigate('read');
    }
    const handleWishlist=()=>{
      navigate(`wishlist`)
    }
      
  return (
    <div>
      <div className="bg-pink-50 flex justify-center items-center py-10 rounded-xl">
        <h2 className="text-2xl lg:text-4xl font-bold">Bookshelf Delights</h2>
      </div>

      <div className="flex justify-center my-8"><details className="dropdown">
        <summary className="m-1 btn text-white bg-[#23BE0A]">Sort by <span><IoIosArrowDown /></span></summary>
        <ul className="p-2 gap-1 shadow menu dropdown-content z-[1] bg-transparent rounded-box w-40">
          <li className="hover:bg-green-300 rounded-lg bg-green-100"><button onClick={()=>handleSort('1')}>Rating</button></li>
          <li className="hover:bg-green-300 rounded-lg bg-green-100"><button onClick={()=>handleSort('2')}>Number of Pages</button></li>
          <li className="hover:bg-green-300 rounded-lg bg-green-100"><button onClick={()=>handleSort('3')}>Published Year</button></li>
        </ul>
      </details>
      </div>
    
      {/* Tabs  */}
      <Tabs>
        <TabList>
          <Tab onClick={handleReadBooks}>Read Books</Tab>
          <Tab onClick={handleWishlist}>Wishlist Books</Tab>
          
        </TabList>

        <TabPanel>
          <div className="grid gap-4 my-4">
              {
                  readbooks?.map(book=><ReadBook key={book.bookId} book={book}></ReadBook>)
              }
          </div>
        </TabPanel>
        <TabPanel>
            <div className="grid gap-4 my-4">
                {
                    wishlist?.map(book=><WishBook key={book.bookId} book={book}></WishBook>)
                }
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
