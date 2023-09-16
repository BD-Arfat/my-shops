import React from 'react';

const AboutShops = () => {
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <div className='text-center'>
                <div className='flex text-center gap-20'>
                    <div className='flex items-center text-justify gap-4'>
                        <img src="https://static.aadi.com.bd/static/store_front/assets/images/image_guard.png" alt="" />
                        <h1 className='text-lg font-bold'>We sell authentic Bangladeshi <br /> fashion brands</h1>
                    </div>
                    <div className='flex items-center text-justify gap-4'>
                        <img src="https://static.aadi.com.bd/static/store_front/assets/images/image_guard.png" alt="" />
                        <h1 className='text-lg font-bold'>Discounts on card and <br /> mobile payments EMI option available</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutShops;