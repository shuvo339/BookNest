import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books?.find((book) => book.bookId == id);
  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-5 mb-10 space-y-4">
      <div>
        <img className="rounded-xl w-full h-[calc(100vh-40px)]" src={book.image} alt="" />
      </div>
      <div>
        <h2 className="lg:text-3xl text-2xl font-bold">{book.bookName}</h2>
        <p className="py-2">
          By: <span className="font-semibold">{book.author}</span>
        </p>
        <hr />
        <p className="py-2">{book.category}</p>
        <hr />
        <p className="py-2">
          <span className="font-semibold">Review: </span>
          <span>{book.review}</span>
        </p>
        <div className="flex gap-4 items-center pt-4 pb-2">
          <p className="font-semibold">Tags</p>
          {book.tags.map((tag, idx) => (
            <div key={idx} className="bg-pink-50 rounded-full">
              <p className="text-[#23BE0A] font-semibold px-5 py-2">#{tag}</p>
            </div>
          ))}
        </div>
        <hr />
        {/* Table of book data  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <tbody>
              {/* row 1 */}
              <tr  className="hover">
                <td className="opacity-85">Number of Pages:</td>
                <td className="font-bold">{book.totalPages}</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td className="opacity-85">Publisher:</td>
                <td className="font-bold">{book.publisher}</td>
              </tr>
              {/* row 3 */}
              <tr  className="hover">
                <td className="opacity-85">Year of Publishing:</td>
                <td className="font-bold">{book.yearOfPublishing}</td>
              </tr>
              {/* row 4 */}
              <tr  className="hover">
                <td className="opacity-85">Rating:</td>
                <td className="font-bold">{book.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>


      <div className="flex gap-3 pt-3">
        <button className="btn border-2 border-slate-200 bg-transparent rounded-lg hover:bg-[#23BE0A]">Read</button>
        <button className="btn border border-slate-300 bg-blue-300 rounded-lg hover:bg-[#23BE0A]">Wishlist</button>
      </div>

      </div>
    </div>
  );
};

export default JobDetails;
