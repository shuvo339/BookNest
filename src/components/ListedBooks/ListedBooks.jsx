import { Link, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  return (
    <div>
      <div className="bg-pink-50 flex justify-center items-center py-10 rounded-xl">
        <h2 className="text-4xl">Books</h2>
      </div>

      <div className="flex justify-center my-8">
        <button className="btn text-white bg-[#23BE0A]">Sort by</button>
      </div>

      {/* Tabs  */}
      <Tabs>
        <TabList>
          <Tab><Link to=''>Read Books</Link></Tab>
          <Tab><Link to={`wishlist`}>Wishlist Books</Link></Tab>
          
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
