import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const ItemOrder = ({ _id, user, date, pay }) => {

   moment.lang('es', {
      months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
      monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
      weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
      weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
      weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
   }
   );

   const { name, lastName } = user;

   const dateOrder = moment(date).format('MMMM Do YYYY, h:mm:ss a');

   return (
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
                  className='p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-base rounded-lg focus:border-4 border-blue-300'
               >
                  Ver pedido
               </Link>
            </p>
         </td>
      </tr>
   )
}
ItemOrder.propTypes = {
   user: PropTypes.object,
   date: PropTypes.string,
   pay: PropTypes.bool,
   _id: PropTypes.string
}