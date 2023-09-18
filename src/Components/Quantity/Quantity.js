import React from 'react';

const Quantity = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div class="custom-number-input h-10 w-32 my-4">
                <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Quantity
                </label>
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button data-action="decrement" class="  text-white font-bold  h-full w-20 rounded-l cursor-pointer outline-none bg-black">
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md  hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 mx-atuo  outline-none" name="custom-input-number" value="0"></input>
                    <button data-action="increment" class="bg-black  text-white font-bold  h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Quantity;