import React from 'react';
import { getImage } from '../../helpers/getImage';

export const Information = () => {
   return (
      <section className="text-gray-600 body-font bg-slate-200 mt-2 rounded-lg border-double border-4 border-slate-300">
         <div className="container px-5 pt-20 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
               <div className="flex flex-col sm:flex-row mt-2">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                     <img src={getImage('./Logo.png')} alt="Logo" className='mx-auto w-auto h-auto object-center' />

                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                     <p className="leading-relaxed text-lg mb-4">
                        En Tota Boyacá se busca resaltar el trabajo de la
                        Miscelánea Rodríguez negocio que tiene alto potencial para extenderse a nivel nacional
                        pero no cuenta con una página web que informe a la comunidad sobre sus servicios y así
                        darse a conocer.
                        <hr />
                        <br/>
                        Esta miscelanea permite la facilidad de acceder a varios productos y promociones, brindando
                        asi una mejor atención al cliente. Ya que le da la oportunidad desde destino poder acceder a 
                        la compra del producto deseado
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};