import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardProduct = ({ route, nameCategory, img }) => {
   return (

      <Link to={route} className="w-full max-w-xs text-center rounded-lg bg-gradient-to-br from-blue-300 to-slate-500 animate__animated animate__zoomIn border-double border-4 border-slate-300 transform hover:-translate-x hover:scale-105 transition duration-500 ease-in-out">
         <img className="object-cover object-center w-full h-48 mx-auto rounded-md" src={img} alt={nameCategory} />

         <div className="m-1">
            <h3 className="text-xl font-medium text-gray-700">{nameCategory}</h3>
         </div>
      </Link>
   )
}
CardProduct.propTypes = {
   route: PropTypes.string.isRequired,
   nameCategory: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired
}