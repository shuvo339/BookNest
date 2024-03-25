import bookimg from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="hero bg-pink-50 lg:px-12 p-4 rounded-xl my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimg}
          className="rounded-lg"
        />
        <div className="lg:space-y-16 space-y-6">
          <h1 className="lg:text-5xl text-4xl font-bold">Refreshing Additions <br />for Your Bookshelf</h1>
          
          <button className="btn bg-[#23BE0A] px-4 text text-white">View The List</button>
        </div>
      </div>
    </div>
  ); 
};

export default Banner;
