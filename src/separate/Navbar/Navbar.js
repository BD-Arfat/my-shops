import React from 'react';

const Navbar = () => {

    const items = <>
        <li className='font-bold text-lg'><a href="">Home</a></li>
        <li className='font-bold text-lg'><a href="">Products</a></li>
        <li className='font-bold text-lg'><a href="">Men</a></li>
        <li className='font-bold text-lg'><a href="">Women</a></li>
    </>

    return (
        <div>
            <nav className="flex justify-between items-start px-10 py-5 relative bg-base-100 shadow-xl">
                <img src="https://static.aadi.com.bd/static/store_front/assets/images/logo.svg" className='w-16' alt="" />

                <div className="hidden sm:flex gap-16">
                    <ul className="flex gap-10 items-start">
                        {items}
                    </ul>

                    <button className="bg-blue-700 text-white py-2 px-5">Get Started</button>
                </div>

                <button id="menu_btn" className="w-10 sm:hidden">
                    <svg id="menu_bars" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>

                    <svg id="menu_close" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x hidden" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>

                {/* <!-- mobile menu --> */}
                <div id="mobile_menu" className="absolute top-full bg-gray-100 right-10 left-10 hidden">
                    <div className="flex flex-col gap-10 p-5 sm:hidden">
                        <ul className="flex flex-col gap-2 items-center text-center">
                            <li className="w-full">
                                <a className="py-5 block" href="">About</a>
                            </li>
                            <li className="w-full">
                                <a className="py-5 block" href="">Services</a>
                            </li>
                            <li className="w-full">
                                <a className="py-5 block" href="">Pricing</a>
                            </li>
                        </ul>

                        <button className="bg-blue-700 text-white py-2 px-5">Get Started</button>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;