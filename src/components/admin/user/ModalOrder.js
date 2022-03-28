import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { useForm } from '../../../hooks/useForm';

export const ModalOrder = ({ _id, modal, name }) => {

   const [formValues, handleInputChange] = useForm({
      pay: ''
   });

   const { pay } = formValues;

   const urlUpdate = `https://miscelanea-api.herokuapp.com/api/order/update/${_id}`;

   const handleUpdateOrder = async () => {
      /* let updatedValue = (pay === 'true') ? payState : false;
      console.log(updatedValue); */
      await fetch(urlUpdate, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            pay
         })
      })
         .then(response => response.json())
         //eslint-disable-next-line
         .then(data => {
            Swal.fire({
               title: 'Orden Actualizada',
               text: 'La orden se ha actualizado correctamente',
               icon: 'success',
               confirmButtonText: 'Ok'
            })
            modal(false);
            setTimeout(() => {
               window.location.reload();
            }, 2000);
         })
         .catch(err => console.error(err))
   }

   return (
      <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
         >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
               {/*content*/}
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                     <h3 className="text-3xl font-semibold">
                        Actualizar Pedido de {name}
                     </h3>
                     <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => modal(false)}
                     >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                           ×
                        </span>
                     </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                     <form>

                        <div className="mt-3 w-auto">
                           <label className="block text-2xl text-gray-900 font-medium dark:text-gray-200">Estado de envio</label>
                           <select className="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white 
                                    focus:border-blue-600 focus:outline-none"
                              aria-label="Default select example"
                              name='pay'
                              value={pay}
                              onChange={handleInputChange}>
                              <option defaultValue>Seleccione el estado...</option>
                              <option value={false}>Enviado</option>
                              <option value={true}>Sin Enviar</option>
                           </select>
                        </div>

                     </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                     <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => modal(false)}
                     >
                        Cerrar
                     </button>
                     <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleUpdateOrder}
                     >
                        Actualizar Producto
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
   )
}
ModalOrder.propTypes = {
   _id: PropTypes.string,
   pay: PropTypes.bool,
   modal: PropTypes.func,
   name: PropTypes.string
}