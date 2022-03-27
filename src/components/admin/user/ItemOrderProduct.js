import React from 'react';
import PropTypes from 'prop-types';

import { setFormatPrice } from '../../../helpers/setFormatPrice';

export const ItemOrderProduct = ({ url, nameProduct, category, price }) => {

   const formatPrice = setFormatPrice(price);

   return (
      <li className="flex items-center justify-between py-4">
         <div className="flex items-start">
            <img
               className="flex-shrink-0 object-cover w-20 h-20 rounded-lg"
               src={url}
               alt={nameProduct}
            />

            <div className="ml-4">
               <p className="text-base"><strong>{nameProduct}</strong></p>

               <dl className="mt-1 space-y-1 text-base    text-gray-500">
                  <div>
                     <dt className="inline">Categoria:</dt>
                     <dd className="inline"> {category}</dd>
                  </div>

                  <div>
                     <dt className="inline">Precio unitatrio:</dt>
                     <dd className="inline"> {formatPrice}</dd>
                  </div>
               </dl>
            </div>
         </div>

         <div>
            <p className="text-sm">
               $49.99
               <small className="text-gray-500">x1</small>
            </p>
         </div>
      </li>
   )
}
ItemOrderProduct.propTypes = {
   url: PropTypes.string,
   nameProduct: PropTypes.string,
   category: PropTypes.string,
   price: PropTypes.number
}
