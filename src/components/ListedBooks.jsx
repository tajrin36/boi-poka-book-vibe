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

    const allBooks = useLoaderData();

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
                    <button className='btn text-[#FFF] text-lg font-semibold bg-[#23BE0A]'>Sort By <span><FaAngleDown /></span></button>

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
                        wishList.map((book,idx) =>
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