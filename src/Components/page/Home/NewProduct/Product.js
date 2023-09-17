import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product }) => {
    const { name, image, price } = product;
    return (
        <div>
            <div class="w-96 md:w-1/2 lg:w-72 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <figure class="mb-2">
                        <img src={image} alt="" class="h-64 ml-auto mr-auto" />
                    </figure>
                    <div class="rounded-lg p-4 bg-black flex flex-col">
                        <div>
                            <h5 class="text-white text-lg font-bold leading-none truncate">
                                {name}
                            </h5>
                            <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
                        </div>
                        <div class="flex items-center">
                            <div class="text-lg text-white font-bold">
                                ${price}
                            </div>
                            <button class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                                <AiOutlineShoppingCart/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;