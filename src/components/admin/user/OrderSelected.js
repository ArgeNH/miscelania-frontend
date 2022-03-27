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

   const { user: { name, lastName, email, address, city, phone }, products, total, cant } = data.order;

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

                              {
                                 products.map((product, index) => (
                                    <ItemOrderProduct key={product._id} {...product} cant={cant[index]} />
                                 ))
                              }

                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="py-12 bg-white md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">
                     <div className="flex items-center">
                        <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>

                        <h2 className="m-4 font-medium text-2xl">Información del cliente</h2>
                     </div>


                     <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                        <div className="border-t border-gray-200 aling-middle text-center">
                           <dl>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                 <dt className="text-base font-medium text-gray-500">
                                    Nombre del cliente
                                 </dt>
                                 <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                                    {name} {lastName}
                                 </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                 <dt className="text-base font-medium text-gray-500">
                                    Correo electronico
                                 </dt>
                                 <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                                    {email}
                                 </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                 <dt className="text-base font-medium text-gray-500">
                                    Ciudad y Dirección
                                 </dt>
                                 <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                                    {city} - {address}
                                 </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                 <dt className="text-base font-medium text-gray-500">
                                    Numero de telefono
                                 </dt>
                                 <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                                    {phone}
                                 </dd>
                              </div>
                           </dl>
                        </div>
                     </div>


                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
