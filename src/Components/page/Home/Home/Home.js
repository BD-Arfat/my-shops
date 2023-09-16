import React from 'react';
import Banner from '../Banner/Banner';
import AboutShops from '../aboutsShop/AboutShops';
import NewProduct from '../NewProduct/NewProduct';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutShops/>
            <NewProduct/>
        </div>
    );
};

export default Home;