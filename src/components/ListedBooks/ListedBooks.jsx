import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
    return (
        <div>
            <div className="bg-pink-50 flex justify-center items-center py-10 rounded-xl">
                <h2 className="text-4xl">Books</h2>
            </div>

            <div className="flex justify-center my-8"><button className="btn text-white bg-[#23BE0A]">Sort by</button></div>


            <div>
                <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><ReadBooks></ReadBooks></div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Whislist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><WishlistBooks></WishlistBooks></div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;