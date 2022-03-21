import React from 'react';
import useSWR from 'swr';

import { fetcher } from '../../../utils/fetcher';
import { DataProduct } from './DataProduct';

export const TableProductsFilter = () => {

   const url = 'https://miscelanea-api.herokuapp.com/api/product';

   const { data } = useSWR(url, fetcher);
   let products = data?.products;

   if (!data) {
      return <div>Cargando...</div>
   }


   return (
      <>
         <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
               <div>
                  <h2 className="text-2xl font-semibold leading-tight">Productos</h2>
               </div>
               <div className="my-2 flex sm:flex-row flex-col">
                  <div className="flex flex-row mb-1 sm:mb-0">
                     <div className="relative">
                        <select
                           className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                           <option defaultValue value="PAPELERIA">Papeleria</option>
                           <option value="FARMACIA">Farmacia</option>
                           <option value="ASEO">Aseo</option>
                           <option value="HOGAR">Hogar</option>
                           <option value="FERRETERIA">Ferreteria</option>
                           <option value="OTROS">Otros</option>
                           <option value="PROMOCION">Promoción</option>
                        </select>
                        <div
                           className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div className="block relative">
                     <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                           <path
                              d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                           </path>
                        </svg>
                     </span>
                     <input placeholder="Search"
                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                  </div>
               </div>
               <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                     <table className="min-w-full leading-normal items-center align-middle">
                        <thead>
                           <tr>
                              <th
                                 className=" align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Producto
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Codigo
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Categoria
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Precio
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Cantidad
                              </th>
                              <th
                                 className="align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Acciones
                              </th>
                           </tr>
                        </thead>
                        <tbody>

                           {
                              products?.map(product => (
                                 <DataProduct key={product._id} {...product} />
                              ))
                           }

                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
