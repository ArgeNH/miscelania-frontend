import React from 'react';
import useSWR from 'swr';

import { fetcher } from '../../../utils/fetcher';
import { ItemOrder } from './ItemOrder';

export const Orders = () => {

   const url = 'https://miscelanea-api.herokuapp.com/api/order/';
   const { data } = useSWR(url, fetcher);

   if (!data) return <div className='mt-20'>Loading...</div>;

   return (
      <div className="antialiased font-sans bg-gray-200 mt-20">
         <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
               <div>
                  <h2 className="text-2xl font-semibold leading-tight text-center">Pedidos</h2>
               </div>

               <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                     <table className="min-w-full leading-normal items-center align-middle text-center">
                        <thead>
                           <tr>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-base font-semibold text-gray-600 uppercase tracking-wider">
                                 Cliente
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-base font-semibold text-gray-600 uppercase tracking-wider">
                                 Fecha y Hora
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-base font-semibold text-gray-600 uppercase tracking-wider">
                                 Estado de envio
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-base font-semibold text-gray-600 uppercase tracking-wider">
                                 Ver pedido
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              data.orders.map(order => (
                                 <ItemOrder key={order._id} {...order} />
                              ))
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
