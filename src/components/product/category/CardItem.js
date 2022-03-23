import React from 'react';
import PropTypes from 'prop-types';

import { setFormatPrice } from '../../../helpers/setFormatPrice';
import { Link } from 'react-router-dom';

export const CardItem = ({ code, nameProduct, price, url: urlP }) => {

   const formatPrice = setFormatPrice(price);

   return (
      <>
         <div className="w-full max-w-sm mx-auto rounded-md shadow-xl overflow-hidden border-double border-4 border-slate-300">
            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{
               backgroundImage: `url(${urlP})`
            }}>
               <Link
                  to={`/productos/${code}/${nameProduct}`}
                  className="p-2 rounded-full bg-indigo-600 text-white mx-5 -mb-4 hover:bg-indigo-500 focus:outline-none focus:bg-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-150"
               >
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               </Link>
            </div>
            <div className="px-5 py-3 bg-indigo-50">
               <h3 className="text-gray-700 uppercase text-ellipsis overflow-hidden whitespace-nowrap">{nameProduct}</h3>
               <span className="text-gray-500 mt-2">{formatPrice}</span>
            </div>
         </div>
      </>
   )
}
CardItem.propTypes = {
   code: PropTypes.string,
   nameProduct: PropTypes.string,
   url: PropTypes.string,
   price: PropTypes.number
}
