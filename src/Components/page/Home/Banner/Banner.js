import React from 'react';

const Banner = () => {
    return (
        <div>
            <table className='w-11/12 mx-auto'>
                <tr>
                    <td className='' rowSpan={2}><img src="https://static.aadi.com.bd/static-banners/kay-kraft-new.jpg" alt="" /></td>
                    <td rowSpan={2}><img src="https://static.aadi.com.bd/static-banners/Aadi-2-423x633-local.png" alt="" /></td>
                    <td><img src="https://static.aadi.com.bd/static-banners/Aadi-4-453X309.png" alt="" /></td>
                </tr>
                <tr>
                    <td><img src="https://static.aadi.com.bd/static-banners/Aharsi-04-small-banner--10-discount.jpg" alt="" /></td>
                </tr>
            </table>
        </div>
    );
};

export default Banner;