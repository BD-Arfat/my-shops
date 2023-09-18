import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Onefeatureds = () => {

    const product = useLoaderData();
    const {name} = product;

    return (
        <div>
            <h2>{name}</h2> 
        </div>
    );
};

export default Onefeatureds;