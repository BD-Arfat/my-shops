import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OneProducts = () => {

    const product = useLoaderData();
    const {name} = product;

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default OneProducts;