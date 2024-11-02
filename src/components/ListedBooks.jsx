import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../utilities/addToDb';
import { FaAngleDown } from "react-icons/fa6";
import ListedBook from './ListedBook';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);

    const [wishList, setWishList] = useState([]);

    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    const handleSort = sortType =>  {
        setSort(sortType);

        //Read books sorting
        if(sortType ===   'No.of pages'){
            const sortedReadList = [...  readList].sort((a,b)=>  a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        if(sortType ===   'Rating'){
            const sortedReadList = [...  readList].sort((a,b)=>  a.rating - b.rating);
            setReadList(sortedReadList);
        }
        if(sortType ===   'publisher year'){
            const sortedReadList = [...  readList].sort((a,b)=>  a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedReadList);
        }

        //wish list sorting
        if(sortType ===   'No.of pages'){
            const sortedWishlist = [...  wishList].sort((a,b)=>  a.totalPages - b.totalPages);
            setWishList(sortedWishlist);
        }
        if(sortType ===   'Rating'){
            const sortedWishlist = [...  wishList].sort((a,b)=>  a.rating - b.rating);
            setWishList(sortedWishlist);
        }
        if(sortType ===   'publisher year'){
            const sortedWishlist = [...  wishList].sort((a,b)=>  a.yearOfPublishing - b.yearOfPublishing);
            setWishList(sortedWishlist);
        }
    }

    useEffect(() => {
        const storedReadlist = getStoredReadList();
        const storedReadlistInt = storedReadlist.map(id => parseInt(id));

        // console.log(storedReadlist, storedReadlistInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadlistInt.includes(book.bookId));

        setReadList(readBookList);
        // console.log(readList);

        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));

        const wishBookList = allBooks.filter(book => storedWishlistInt.includes(book.bookId));

        setWishList(wishBookList);
    }, [])
    return (
        <div className='md:mx-auto md:container'>
            <div>
                <h2 className='text-[#131313] text-3xl font-bold text-center mt-6'>Books</h2>
                <div className='flex gap-3 items-center justify-center mt-5'>
                    <details className="dropdown">
                        <summary className="btn text-[#FFF] text-lg font-semibold bg-[#23BE0A]">
                            {
                                sort ? `Sort By: ${ sort}` : <div className='flex items-center gap-2'>Sort By<span><FaAngleDown /></span></div>
                            }
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={()=>  handleSort('Rating')}><a>Rating</a></li>
                            <li onClick={()=>  handleSort('No.of pages')}><a>Number of pages</a></li>
                            <li onClick={()=>  handleSort('publisher year')}><a>Publisher year</a></li>
                        </ul>
                    </details>
                    {/* <button className='btn text-[#FFF] text-lg font-semibold bg-[#23BE0A]'>Sort By <span><FaAngleDown /></span></button> */}

                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map((book, idx) =>
                            <ListedBook
                                key={idx}
                                book={book}
                            ></ListedBook>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.map((book, idx) =>
                            <ListedBook
                                key={idx}
                                book={book}
                            ></ListedBook>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;