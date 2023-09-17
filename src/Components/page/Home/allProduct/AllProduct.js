import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/featureds')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto mb-20'>
            <h1 className='text-left font-bold text-xl'>
                Some products

            </h1>
            <hr class="border-2 w-36 border-amber-500 hover:border-purple-500 drop-shadow-xl" />





            <div class="container mx-auto w-full overflow-hidden relative mt-10">
                <div class="w-full h-full absolute">
                    {/* <div class="w-1/4 h-full absolute z-50 left-0" style={{background: "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)"}}></div>
            <div class="w-1/4 h-full absolute z-50 right-0" style={{background: "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)"}}></div> */}
                </div>

                <div class="carousel-items flex items-center justify-center" style={{ animation: 'carouselAnim 10s infinite alternate linear' }}>

                    {
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </div>

            </div>

        </div>
    );
};

export default AllProduct;