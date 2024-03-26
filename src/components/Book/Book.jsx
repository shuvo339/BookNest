import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Book = ({ book }) => {
  const {bookId, image, tags, bookName, author, category, rating } = book;
  const navigate = useNavigate();
  const handleJobDetails=id=>{
    navigate(`/book/${id}`)
  }
  return (
    <div onClick={()=>handleJobDetails(bookId)} className="border p-4 space-y-2 rounded-lg shadow-md">
      <img className="w-full h-60 p-2 rounded-2xl" src={image} alt="" />
      <div className="flex gap-4">
        {tags.map((tag, idx) => (
          <div key={idx} className="bg-pink-50 rounded-full"><p className="text-[#23BE0A] font-semibold px-5 py-2">
          {tag}
        </p></div>
        ))}
      </div>
      <h2 className="text-xl font-bold">{bookName}</h2>
      <p className="pb-2">By: <span className="font-medium">{author}</span></p>
      <hr className="border border-dashed"/>
      <div className="flex justify-between pt-2">
        <p>{category}</p>
        <div className="flex gap-2 items-center">
          <p>{rating}</p>
          <FaRegStar />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
