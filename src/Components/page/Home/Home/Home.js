import React from 'react';
import Banner from '../Banner/Banner';
import AboutShops from '../aboutsShop/AboutShops';
import NewProduct from '../NewProduct/NewProduct';
import Sponsors from '../Sponsor/Sponsors';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Sponsor2 from '../FeaturedProducts/Sponsor2/Sponsor2';
import AllProduct from '../allProduct/AllProduct';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutShops/>
            <FeaturedProducts/>
            <Sponsors/>
            <NewProduct/>
            <Sponsor2/>
            <AllProduct/>
        </div>
    );
};

export default Home;