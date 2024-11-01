import { NavLink } from "react-router-dom";

const Navbar = () => {

    // const links = <>
    //     <li><NavLink to='/' className="gray-btn">Home</NavLink></li>
    //     <li><NavLink to='' className="gray-btn ">Listed Books</NavLink></li>    
    //     <li><NavLink to='dashboard' className="gray-btn ">Pages to Read</NavLink></li>
    // </>
    return (
        <div className="md:mx-auto md:container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                            {/* {links} */}
                            <li><NavLink to='/' className="gray-btn">Home</NavLink></li>
                            <li><NavLink to='listedBooks' className="gray-btn ">Listed Books</NavLink></li>
                            <li><NavLink to='dashboard' className="gray-btn ">Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn gray-btn   text-[#131313] text-2xl font-bold ">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {/* {links} */}
                        <li><NavLink to='/' className="gray-btn">Home</NavLink></li>
                        <li><NavLink to='listedBooks' className="gray-btn ">Listed Books</NavLink></li>
                        <li><NavLink to='dashboard' className="gray-btn ">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn bg-[#23BE0A] text-[#FFF] text-lg font-semibold ">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-[#FFF] text-lg font-semibold ">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;