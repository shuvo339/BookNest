import { Outlet, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown } from "react-icons/io";



const ListedBooks = () => {
  const navigate = useNavigate();
  const handleReadBooks=()=>{
    navigate('');
  }
  const handleWishlist=()=>{
    navigate(`wishlist`)
  }


  return (
    <div>
      <div className="bg-pink-50 flex justify-center items-center py-10 rounded-xl">
        <h2 className="text-4xl">Books</h2>
      </div>

      <div className="flex justify-center my-8"><details className="dropdown">
        <summary className="m-1 btn text-white bg-[#23BE0A]">Sort by <span><IoIosArrowDown /></span></summary>
        <ul className="p-2 gap-1 shadow menu dropdown-content z-[1] bg-transparent rounded-box w-40">
          <li className="hover:bg-green-300 rounded-lg bg-green-100"><button>Rating</button></li>
          <li className="hover:bg-green-300 rounded-lg bg-green-100"><button>Number of Pages</button></li>
          <li className="hover:bg-green-300 rounded-lg bg-green-100"><button>Published Year</button></li>
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
          <Outlet></Outlet>
        </TabPanel>
        <TabPanel>
          <Outlet></Outlet>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
