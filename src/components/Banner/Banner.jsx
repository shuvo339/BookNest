import { Link } from "react-router-dom";
import bookimg from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="hero bg-pink-50 lg:px-12 p-4 rounded-xl my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimg}
          className="rounded-lg"
        />
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold pb-12">Refreshing Additions <br />for Your Bookshelf</h1>
          <Link to="/listedbook"><button className="btn bg-[#23BE0A] px-4 text text-white">View The List</button></Link>
        </div>
      </div>
    </div>
  ); 
};

export default Banner;
