import React from 'react';

export const Information = () => {
   return (
      <section className="text-gray-600 body-font bg-slate-200 mt-2 rounded-lg border-double border-4 border-slate-300">
         <div className="container px-5 pt-20 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
               {/* <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-center h-full w-full xl:object-cover" src="/assets/logo.png" />
               </div> */}
               <div className="flex flex-col sm:flex-row mt-2">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                     <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                           <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                           <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                     </div>
                     <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Nombre Propietario</h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                        <p className="text-base">
                           Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh
                           hot chicken gentrify portland.
                        </p>
                     </div>
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