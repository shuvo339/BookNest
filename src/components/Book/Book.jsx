import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  return (
    <div className="border p-4 space-y-2 rounded-lg shadow-md">
      <img className="w-full h-60 p-2 rounded-2xl" src={image} alt="" />
      <div className="flex gap-8">
        {tags.map((tag, idx) => (
          <p key={idx} className="text-[#23BE0A] font-semibold">
            {tag}
          </p>
        ))}
      </div>
      <h2 className="text-xl font-bold">{bookName}</h2>
      <p>By: {author}</p>
      <div className="flex justify-between pt-4">
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
