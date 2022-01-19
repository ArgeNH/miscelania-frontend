import React from 'react';
import PropTypes from 'prop-types';
import { setFormatPrice } from '../../../helpers/setFormatPrice';

const DataTable = ({ url, code, nameProduct, category, price, cant }) => {

    const formatPrice = setFormatPrice(price);
    
    return (
        <tr className='text-center'>

            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                {url}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                {code}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {nameProduct}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {category}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {formatPrice}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {cant}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-1">
                <button
                    className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
                >
                    Actualizar
                </button>
                <button
                    className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

DataTable.propTypes = {
    url: PropTypes.string,
    code: PropTypes.string,
    nameProduct: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    cant: PropTypes.number
};

export default DataTable;
