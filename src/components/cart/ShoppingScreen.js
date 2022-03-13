import React from 'react';
import { useSelector } from 'react-redux';
import { setFormatPrice } from '../../helpers/setFormatPrice';
import { ItemCart } from './ItemCart';

export const ShoppingScreen = () => {

   const { products } = useSelector(state => state.cart);

   const totalPrice = products.reduce((prev, { total }) => prev + total, 0);
   const formatPrice = setFormatPrice(totalPrice);

   return (
      <section>
         <div className="relative mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="py-12 bg-gray-50 md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">
                     <div className="flex items-center">

                        <h2 className="font-medium text-xl">{products.length !== 0 ? 'Tu Carrito' : ''}</h2>
                     </div>

                     {
                        products.length !== 0 ?
                           (<>
                              <div className="mt-8">
                                 <p className="text-2xl font-medium tracking-tight">{formatPrice}</p>
                                 <p className="mt-1 text-sm text-gray-500">Total a pagar</p>
                              </div>

                              <div className="mt-12">
                                 <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-200">

                                       {
                                          products.map(product => (
                                             <ItemCart key={product.code} {...product} />
                                          ))
                                       }

                                    </ul>
                                 </div>
                              </div>
                           </>)
                           :
                           (
                              <div className='mt-20'>
                                 <h2 className="text-xl font-semibold">Carrito vacio</h2>
                              </div>
                           )
                     }
                  </div>
               </div>

               <div className="py-12 bg-white md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">

                     <div className="flex items-center">

                        <h2 className="ml-4 font-medium">Pagar con PayPal</h2>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
