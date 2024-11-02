import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishlist } from "../utilities/addToDb";

const BookDetail = () => {

    const { bookId } = useParams();

    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId ===   id);
    console.log(book);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleWishlist = (id) => {
        addToStoredWishlist(id);
    }
    return (
        <div className="md:mx-auto md:container">
            <div className="md:flex items-center justify-between gap-4 p-4 ">
                <div className="border p-6 bg-base-200 rounded-xl basis-[30%]">
                    <img src={image} alt="" />
                </div>
                <div className="w-[100%] space-y-3 basis-[70%]">
                    <h2 className="text-[#131313] text-4xl font-bold">{bookName}</h2>
                    <p className="text-slate-600 text-xl font-medium">{author}</p>
                    <hr />
                    <p className="text-slate-600 text-xl font-medium">{category}</p>
                    <hr />
                    <p className="text-slate-500 text-base font-normal"><span className="text-base font-bold text-[#131313]">Review:</span> {review}</p>
                    <div className="flex gap-3 items-center ">
                        <p className="text-[#131313] text-base font-bold">Tag</p>
                        <div className="flex gap-4">
                            {
                                tags.map((tag, idx) => <button className="btn text-[#23BE0A] text-lg font-medium bg-[#f0faef] border-none rounded-2xl" key={idx}>#{tag}</button>)
                            }
                        </div>
                    </div>
                    <hr />
                    <p className="text-[#131313] text-base font-semibold"><span className="text-slate-500 text-base font-normal">Number of Pages:</span> {totalPages}</p>
                    <p className="text-[#131313] text-base font-semibold"><span className="text-slate-500 text-base font-normal">Publisher:</span> {publisher}</p>
                    <p className="text-[#131313] text-base font-semibold"><span className="text-slate-500 text-base font-normal">Year of Publishing:</span> {yearOfPublishing}</p>
                    <p className="text-[#131313] text-base font-semibold"><span className="text-slate-500 text-base font-normal">Rating:</span> {rating}</p>
                    <div className="flex items-center gap-4">
                        <NavLink><button onClick={() => handleMarkAsRead(bookId)} className="btn bg-white text-[#131313] text-lg font-semibold border-black/30">Read</button></NavLink>
                        <NavLink><button onClick={()=>  handleWishlist(bookId)} className="btn bg-[#50B1C9] text-[#FFF] text-lg font-semibold">Wishlist</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;