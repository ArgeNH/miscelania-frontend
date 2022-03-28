import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { fetcher } from '../../../utils/fetcher';
import { Error404 } from '../../alerts/Error404';
import { ItemOrder } from './ItemOrder';

export const Orders = () => {

   const navigate = useNavigate();

   const { role } = useSelector(state => state.auth);

   const url = 'https://miscelanea-api.herokuapp.com/api/order/';
   const { data } = useSWR(url, fetcher);

   if (role === undefined || role === 'CLIENT') {
      return (
         <Error404 name='Permisos insuficientes' desc='El usuario no cuenta con los permisos para ver esta pagina, por favor contacte con el admin del sitio' />
      )
   }

   if (!data) return <div className='mt-20'>Loading...</div>;

   return (
      <div className="antialiased font-sans bg-gray-200 mt-20">
         <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
               <div>
                  <h2 className="text-2xl font-semibold leading-tight text-center">Pedidos</h2>
                  <button
                     type="button"
                     className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-gray-900 rounded-lg w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                     onClick={() => navigate(-1)}
                  >
                     Regresar
                  </button>
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
                                 Acciones
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
