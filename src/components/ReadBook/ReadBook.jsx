import PropTypes from "prop-types";
import { MdOutlineEditLocation, MdOutlineFindInPage } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const ReadBook = ({book={}}) => {
    const {bookId, image, tags, bookName, author, category, rating,yearOfPublishing, publisher, totalPages} = book;
    const navigate = useNavigate();
    const handleViewDetails=id=>{
        navigate(`/book/${id}`)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 border-2 gap-0 space-y-2 lg:gap-5 p-6 rounded-xl">
            <div className="col-span-1">
                <img className="rounded-xl w-full h-full" src={image} alt="" />
            </div>
            <div className="col-span-4">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p>By: <span className="font-semibold">{author}</span></p>
                <div className="flex flex-col lg:flex-row items-start lg:items-center pb-2 w-full lg:w-2/3">
                    <div className="flex items-center lg:flex-grow flex-grow-0 my-3 gap-4">
                        <p className="font-semibold">Tags</p>
                        {tags.map((tag, idx) => (
                        <div key={idx} className="bg-pink-50 rounded-full">
                        <p className="text-[#23BE0A] font-semibold px-5 py-2">#{tag}</p>
                    </div>
                ))}
                    </div>
                <div className="">
                    <h2 className="opacity-85 flex items-center gap-2"><MdOutlineEditLocation className="text-xl"/> Year of Publishing: {yearOfPublishing}</h2>
                </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-2 lg:gap-16">
                    <h2 className="flex gap-1 items-center opacity-90"><HiOutlineUsers className="text-xl"/>Publisher: <span className="font-semibold">{publisher}</span></h2>
                    <h2 className="flex gap-1 items-center opacity-90"><MdOutlineFindInPage className="text-xl"/>Pages: <span className="font-semibold">{totalPages}</span></h2>
                </div>
                <hr className="my-3"/>
                <div className="flex lg:flex-row flex-col gap-6">
                    <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-full">
                        <h2 className="px-4 py-2 text-blue-600">Category: {category}</h2>
                    </div>
                    <div className="bg-pink-100 rounded-full">
                        <h2 className="px-6 py-2 text-pink-500">Rating: {rating}</h2>
                    </div>
                    </div>
                        <button onClick={()=>handleViewDetails(bookId)} className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object,
  };
export default ReadBook;