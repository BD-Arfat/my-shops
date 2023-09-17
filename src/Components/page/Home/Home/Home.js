import React from 'react';
import Banner from '../Banner/Banner';
import AboutShops from '../aboutsShop/AboutShops';
import NewProduct from '../NewProduct/NewProduct';
import Sponsors from '../Sponsor/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutShops/>
            <NewProduct/>
            <Sponsors/>
        </div>
    );
};

export default Home;