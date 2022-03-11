import React from 'react';
import PropTypes from 'prop-types';
import { setFormatPrice } from '../../helpers/setFormatPrice';
import { capitalize } from '../../helpers/capitalize';

export const ItemCart = ({ nameProduct, total, category, url, counter, price }) => {

   const format = setFormatPrice(total);
   const formatPrice = setFormatPrice(price);
   const categoryCap = capitalize(category);

   return (
      <li className="flex items-center justify-between py-4">
         <div className="flex items-start">
            <img
               className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
               src={url}
               alt={nameProduct}
            />

            <div className="ml-4">
               <p className="text-sm">{nameProduct}</p>

               <dl className="mt-1 space-y-1 text-xs text-gray-500">
                  <div>
                     <dt className="inline">Categoria:</dt>
                     <dd className="inline">{categoryCap}</dd>
                  </div>

                  <div>
                     <dt className="inline">Precio unitatrio:</dt>
                     <dd className="inline">{formatPrice}</dd>
                  </div>
                  <div>
                     <dt className="inline">Cantidad:</dt>
                     <dd className="inline">{counter}</dd>
                  </div>
                  
               </dl>
            </div>
         </div>

         <div>
            <p className="text-sm">
               {format}
            </p>
         </div>
      </li>

   )
}
ItemCart.propTypes = {
   nameProduct: PropTypes.string,
   total: PropTypes.number,
   price: PropTypes.number,
   category: PropTypes.string,
   counter: PropTypes.number,
   url: PropTypes.string
}