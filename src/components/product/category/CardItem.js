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
               <h3 className="text-gray-700 uppercase">{nameProduct}</h3>
               <span className="text-gray-500 mt-2">{formatPrice}</span>
            </div>
         </div>

         {/* <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto animate__animated animate__fadeInLeft">
         <img className="object-cover w-full rounded-md h-72 xl:h-80" src={url} alt={nameProduct} />
         <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{nameProduct}</h4>
         <p className="text-blue-500">{formatPrice}</p>

         <Link
            to={`/productos/${code}/${nameProduct}`}
            className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
         >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="mx-1">Ver producto</span>
         </Link>
      </div> */}
      </>
   )
}
CardItem.propTypes = {
   code: PropTypes.string,
   nameProduct: PropTypes.string,
   url: PropTypes.string,
   price: PropTypes.number
}
