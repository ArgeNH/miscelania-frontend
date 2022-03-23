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
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería 
                        de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo 
                        sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
                        Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de 
                        autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};