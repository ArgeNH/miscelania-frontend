import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { Error404 } from '../alerts/Error404';

export const Admin = () => {

   const { role } = useSelector(state => state.auth);

   if (role === undefined || role === 'CLIENT') {
      return (
         <Error404 name='Permisos insuficientes' desc='El usuario no cuenta con los permisos para ver esta pagina, por favor contacte con el admin del sitio' />
      )
   }

   return (
      <>

         <div className="w-full bg-white p-12 mt-20 bg-gray-100">
            <div className="header flex items-end justify-between mb-12">
               <div className="title">
                  <p className="text-4xl font-bold text-gray-800 mb-4">
                     Paneles de administración
                  </p>
                  <p className="text-2xl font-light text-gray-400">
                     Funcionalidades basicas
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

               <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <Link to={'/productos'} className="w-full block h-full">
                     <img alt="blog photo" src="https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="max-h-40 w-full object-cover" />
                     <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-indigo-500 text-md font-medium">
                           Productos
                        </p>
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                           Administración de productos
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                           Esta sección permite administrar los productos que se encuentran en la tienda.
                        </p>
                     </div>
                  </Link>
               </div>

               <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <Link to={'/order'} className="w-full block h-full">
                     <img alt="blog photo" src="https://images.unsplash.com/photo-1529003600303-bd51f39627fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="max-h-40 w-full object-cover" />
                     <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-indigo-500 text-md font-medium">
                           Pedidos
                        </p>
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                           Administración de pedidos
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                           Esta sección permite administrar los pedidos que se encuentran en la tienda.
                        </p>
                     </div>
                  </Link>
               </div>
            </div>
         </div>

      </>
   )
}
