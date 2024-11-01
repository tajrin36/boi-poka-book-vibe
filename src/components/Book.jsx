import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {
        bookId,
        image,
        tags,
        bookName,
        author,
        category,
        rating
    } = book;
    return (
        <Link to={`/books/${ bookId}`}>
            <div className="border p-6 rounded-xl space-y-4">
                <div className="bg-[#F3F3F3] px-4 py-8  flex items-center justify-center rounded-xl gap-4">
                    <img className="h-60 skew-y-6 border border-r-[6px] border-t-[6px] hover:skew-y-0 hover:border-none transition-all duration-150 border-black/80  hover:scale-110" src={image} alt="Book" />
                </div>
                <div className="flex gap-4">
                    {
                        tags.map((tag, idx) => <button className="btn text-[#23BE0A] text-lg font-medium bg-[#f0faef] border-none rounded-2xl" key={idx}>{tag}</button>)
                    }
                </div>
                <h2 className="text-[#131313] text-2xl font-semibold">{bookName}</h2>
                <p className="text-[#131313] text-base font-medium">By: {author}</p>
                <div className="border border-dashed"></div>
                <div className="flex justify-between items-center">
                    <p className="text-[#131313] text-base font-medium">{category}</p>
                    <div className="flex justify-center items-center ">
                        <p className="text-[#131313] text-base font-medium">{rating}</p>
                        <IoIosStarOutline />
                    </div>

                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;