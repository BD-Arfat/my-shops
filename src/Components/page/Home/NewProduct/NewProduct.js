import React, { useEffect, useState } from 'react';
import Product from './Product';
import './product.css'

const NewProduct = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto mb-20'>
            <h1 className='text-left font-bold text-xl'>
                New products

            </h1>
            <hr className='text-orange-500 w-28 text-2xl font-bold' />

            {/* {
                products.map(product => <Product key={product._id} product={product}/>)
            } */}

        </div>
    );
};

export default NewProduct;