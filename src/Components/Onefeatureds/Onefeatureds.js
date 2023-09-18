import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quantity from '../Quantity/Quantity';

const Onefeatureds = () => {

    const product = useLoaderData();
    const { name, image, price, Color, Fabric, Occasion, description } = product;

    return (
        <div className='w-11/12 mx-auto mt-16 mb-20'>
            <div className='mx-auto'>
                <div className='flex   gap-10'>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className='text-justify'>
                        <h1 className='font-bold text-3xl'>{name}</h1>
                        {/* rating */}
                        <div className="rating mt-4">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <h1 className='font-bold text-2xl mt-2'>${price}</h1>

                        <div>
                            <Quantity />
                        </div>

                        <div className='mt-10'>
                            <h1 className='mt-2 text-lg font-bold'>Color : {Color}</h1>
                            <h1 className='mt-2 text-lg font-bold'>Fabric : {Fabric}</h1>
                            <h1 className='mt-2 text-lg font-bold'>Occasion : {Occasion}</h1>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-neutral btn-outline px-16'>Add To Cart</button>
                        </div>
                    </div>

                </div>

                <div className='text-justify mt-20'>
                    <h1><span className='font-bold text-2xl'>Description</span> : <span className='font-bold'>{description}</span></h1>
                </div>

            </div>
        </div>
    );
};

export default Onefeatureds;