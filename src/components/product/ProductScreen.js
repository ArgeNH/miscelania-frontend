import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ProductAdd } from '../admin/product/ProductAdd';
import { TableProductsFilter } from '../admin/product/TableProductsFilter';
import { Error404 } from '../alerts/Error404';

export const ProductScreen = () => {

   const navigate = useNavigate();

   const { role } = useSelector(state => state.auth);

   if (role === undefined || role === 'CLIENT') {
      return (
         <Error404 name='Permisos insuficientes' desc='El usuario no cuenta con los permisos para ver esta pagina, por favor contacte con el admin del sitio' />
      )
   }

   return (
      <section className="bg-gray-100 mt-10">
         <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 sm:py-20">
            <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl">
               Añadir nuevos productos
            </h2>
            <button
               type="button"
               className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-gray-900 rounded-lg w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
               onClick={() => navigate(-1)}
            >
               Regresar
            </button>

            <ProductAdd />

            {/* <TableProduct /> */}
            <TableProductsFilter />

         </div>
      </section>
   )
}