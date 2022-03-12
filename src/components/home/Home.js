import React from 'react';

import { CardProduct } from './CardProduct';
import { info } from '../../data/infoProduct';
import { Information } from './Information';
import { useTitle } from '../../hooks/useTitle';

export const Home = () => {

   useTitle('Miscelanea Rodriguez');

   return (
      <>

         <Information />

         <section className='bg-slate-50 pb-5 pt-5 rounded-lg border-double border-4 border-slate-300 mt-1'>
            <h2 className="text-2xl font-bold sm:text-3xl text-center mb-5">
               NUESTRAS CATEGORIAS
            </h2>
            <div className="flex items-center justify-center">
               <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                  {
                     info.map(category => (
                        <CardProduct key={category.id} {...category} />
                     ))
                  }

               </div>
            </div>
         </section>
      </>
   )
}