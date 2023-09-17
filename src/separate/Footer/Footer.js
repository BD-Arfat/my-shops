import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillPhone, AiFillYoutube, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-20 bg-black  text-base-content">
                <aside>
                    <img src="https://static.aadi.com.bd/static/store_front/assets/images/aadi_logo_optimized.png" className='w-32 mx-auto' alt="" />
                    <div className='flex gap-2'>
                        <AiOutlineMail className='text-2xl text-white' />
                        <AiFillFacebook className='text-2xl text-white' />
                        <AiFillYoutube className='text-2xl text-white' />
                        <AiFillInstagram className='text-2xl text-white' />
                    </div>
                </aside>
                <nav>
                    <header className="footer-title text-warning font-bold text-xl">WE ARE HERE TO HELP !</header>
                    <a className="link link-hover text-white">FAQ</a>
                    <a className="link link-hover text-white">24/7 CUSTOMER SUPPORT</a>
                    <a className="link link-hover text-white flex gap-2"><AiFillPhone className='text-white text-xl' />+8801846615162</a>
                </nav>
                <nav>
                    <header className="footer-title text-warning font-bold text-xl">KNOW US BETTER</header>
                    <a className="link link-hover text-white">KNOW US BETTER</a>
                    <a className="link link-hover text-white">News
                    </a>
                    <a className="link link-hover text-white">Privacy Policy</a>
                    <a className="link link-hover text-white">Shipping Rates & Policies</a>
                    <a className="link link-hover text-white">Terms and conditions</a>
                    <a className="link link-hover text-white">Return and Refund Policy</a>
                    <a className="link link-hover text-white">Taxes & Import duties</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold text-xl text-warning">MAKE MONEY WITH US</header>
                    <a className="link link-hover text-white">Sell on aadi</a>
                    <a className="link link-hover text-white">Seller terms & conditions</a>
                    <button className='btn btn-warning btn-outline px-20'>Login</button>
                </nav>
                
            </footer>
            <div>
                    <img src="https://static.aadi.com.bd/static/store_front/assets/images/SSL_Commerz_Pay_With_logo_All_Size-03.png" alt="" />
                </div>
        </div>
    );
};

export default Footer;