import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";

const ListedBook = ({ book }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
    return (
        <div className="md:flex items-center border p-4 mb-3 rounded-xl">
            <div className="md:basis-[10%] p-5 bg-gray-200 rounded-xl">
                <img src={image} alt="" />
            </div>
            <div className="md:basis-[90%] px-4 space-y-2">
                <h2 className="text-[#131313] text-2xl font-bold">{bookName}</h2>
                <p className="text-slate-600 text-base font-medium">By: {author}</p>
                <div className="md:flex gap-3 items-center">

                    <div className="flex items-center gap-4">
                        <p className="text-[#131313] text-base font-bold">Tag</p>
                        {
                            tags.map((tag, idx) => <button className="btn text-[#23BE0A] text-lg font-medium bg-[#f0faef] border-none rounded-2xl" key={idx}>#{tag}</button>)
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-black/80 text-base font-medium" />
                        <p className="text-black/80 text-base font-medium">Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <HiOutlineUsers className="text-black/60 text-base font-normal" />
                        <p className="text-black/60 text-base font-normal">Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiPagesLine className="text-black/60 text-base font-normal" />
                        <p className="text-black/60 text-base font-normal">Page {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="flex items-center gap-3">
                        <button className="btn text-[#328EFF] text-base font-normal bg-[#eaf3ff] rounded-2xl">Category: {category}</button>
                        <button className="btn text-[#FFAC33] text-base font-normal bg-[#fff6ea] rounded-2xl">Rating: {rating}</button>
                    </div>
                    <div>
                        <button className='btn text-[#FFF] text-lg font-medium bg-[#23BE0A] rounded-2xl'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;