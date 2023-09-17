import React from 'react';
import Navbar from '../separate/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../separate/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;