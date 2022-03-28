import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { ModalOrder } from './ModalOrder';

export const ItemOrder = ({ _id, user, date, pay }) => {

   const [modal, setModal] = useState(false);

   moment.updateLocale('es', {
      months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
      monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
      weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
      weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
      weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
   });

   const { name, lastName, email } = user;

   const dateOrder = moment(date).format('MMMM Do YYYY, h:mm:ss a');

   const urlDelete = `https://miscelanea-api.herokuapp.com/api/order/delete/${_id}`;

   const handleDelete = async () => {
      await Swal.fire({
         icon: 'question',
         text: `¿Estas seguro que quiere eliminar este pedido?`,
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, estoy seguro',
         cancelButtonText: 'Cancelar'
      }).then(async (result) => {
         if (result.isConfirmed) {
            await fetch(urlDelete, {
               method: 'DELETE'
            })
               .then(response => response.json())
               .then(data => {
                  console.log(data.order);
               });
            Swal.fire(
               'Pedido Eliminado',
               `Se ha eliminado el pedido de ${name} ${lastName}`,
               'success'
            );
            setTimeout(() => {
               window.location.reload();
            }, 2000);
         }
      });
   }

   return (
      <>
         <tr>
            <td className="py-5 border-b border-gray-200 bg-white text-base">
               <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap text-center">
                     <strong>{name} {lastName}</strong>
                  </p>
               </div>
            </td>
            <td className="py-5 border-b border-gray-200 bg-white text-base">
               {dateOrder}
            </td>
            <td className="py-5 border-b border-gray-200 bg-white text-base">
               {!pay ?
                  (<span
                     className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                     <span aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                     <span className="relative">Enviado</span>
                  </span>)
                  :
                  (<span
                     className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                     <span aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                     <span className="relative">Sin enviar</span>
                  </span>)}
            </td>
            <td className="py-5 border-b border-gray-200 bg-white text-base">
               <p className="text-gray-900 whitespace-no-wrap">
                  <Link
                     to={`/order/${_id}`}
                     className='m-1 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-base rounded-lg hover:bg-blue-700'
                  >
                     Ver
                  </Link>
                  <button
                     className='m-1 p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-base rounded-lg hover:bg-green-700'
                     onClick={() => setModal(!modal)}
                  >
                     Actualizar
                  </button>
                  <button
                     className='m-1 p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-base rounded-lg hover:bg-red-700'
                     onClick={handleDelete}
                  >
                     Eliminar
                  </button>
               </p>
            </td>
         </tr>
         {
            modal ? <ModalOrder _id={_id} pay={pay} modal={setModal} name={`${name} ${lastName}`} email={email} /> : null
         }
      </>
   )
}
ItemOrder.propTypes = {
   user: PropTypes.object,
   date: PropTypes.string,
   pay: PropTypes.bool,
   _id: PropTypes.string
}