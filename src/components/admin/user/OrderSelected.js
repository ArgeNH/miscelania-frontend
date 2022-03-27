import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr';
import { setFormatPrice } from '../../../helpers/setFormatPrice';

import { fetcher } from '../../../utils/fetcher';
import { ItemOrderProduct } from './ItemOrderProduct';

export const OrderSelected = () => {

   const { id } = useParams();
   const url = `https://miscelanea-api.herokuapp.com/api/order/${id}`;
   const { data } = useSWR(url, fetcher);

   if (!data) return <div className='mt-20'>Loading...</div>;

   console.log("🚀 ~ file: OrderSelected.js ~ line 12 ~ OrderSelected ~ data", data);

   const { user: { name, lastName, email, address, city, phone }, products, total } = data.order;

   const totalFormat = setFormatPrice(total);

   return (
      <section>
         <div className="relative mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="py-12 bg-gray-50 md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">
                     <div className="flex items-center">
                        <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>

                        <h2 className="ml-4 font-medium text-2xl">Pedido de {name} {lastName}</h2>
                     </div>

                     <div className="mt-8">
                        <p className="text-base font-medium tracking-tight">Valor de la compra: {totalFormat}</p>
                     </div>

                     <div className="mt-12">
                        <div className="flow-root">
                           <ul className="-my-4 divide-y divide-gray-200">

                              {products.map(product => (
                                 <ItemOrderProduct key={product._id} {...product} />
                              ))}

                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="py-12 bg-white md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">

                     <div>
                        <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
                           <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
                              <div className="flex ">
                                 <span
                                    className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Nombre:
                                 </span>
                                 <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={`${name} ${lastName}`} readOnly />
                              </div>
                              <div className="flex ">
                                 <span
                                    className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Email:
                                 </span>
                                 <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={email} readOnly />
                              </div>
                              <div className="flex ">
                                 <span
                                    className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Direccion:
                                 </span>
                                 <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={address} readOnly />
                              </div>
                              <div className="flex ">
                                 <span
                                    className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Ciudad:
                                 </span>
                                 <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={city} readOnly />
                              </div>
                              <div className="flex ">
                                 <span
                                    className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Celular:
                                 </span>
                                 <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={phone} readOnly />
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
