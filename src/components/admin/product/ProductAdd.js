import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../../hooks/useForm';

import { InputProduct } from './InputProduct';

export const ProductAdd = () => {

   const [image, setImage] = useState({});

   const [formValues, handleInputChange, reset] = useForm({
      code: '',
      nameProduct: '',
      price: '',
      cant: '',
      category: '',
   });

   const { code, nameProduct, price, cant, category } = formValues;

   const handleFile = (e) => {
      e.preventDefault();
      setImage(e.target.files[0]);
   }

   const handleAddProduct = async (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append('image', image);
      formData.append('code', code);
      formData.append('nameProduct', nameProduct);
      formData.append('price', price);
      formData.append('cant', cant);
      formData.append('category', category);
      await fetch('https://miscelanea-api.herokuapp.com/api/product', {
         method: 'POST',
         body: formData
      })
         .then(response => response.json())
         //eslint-disable-next-line
         .then(data => {
            if (data.success) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `El producto se ha agregado correctamente`,
                  showConfirmButton: false,
                  timer: 2000
               })
               reset();
            } else {
               Swal.fire({
                  title: 'Error',
                  text: data.error,
                  icon: 'error',
                  confirmButtonText: 'Ok'
               })
            }
         })
         .catch(err => console.log(err));
   }

   return (
      <div className="w-full max-w-3xl p-3 m-auto bg-white rounded-md shadow-md  mt-5 dark:bg-gray-800">

         <form onSubmit={handleAddProduct}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
               <InputProduct
                  label='Codigo'
                  name='code'
                  place='132AFG'
                  type='text'
                  value={code}
                  handle={handleInputChange}
               />

               <InputProduct
                  label='Nombre Producto'
                  name='nameProduct'
                  place='Arroz'
                  type='text'
                  value={nameProduct}
                  handle={handleInputChange}
               />

               <InputProduct
                  label='Precio'
                  name='price'
                  place='12800'
                  type='number'
                  value={price}
                  handle={handleInputChange}
               />

               <InputProduct
                  label='Cantidad'
                  name='cant'
                  place='20'
                  type='number'
                  value={cant}
                  handle={handleInputChange}
               />

               <div className="mt-3 w-auto">
                  <label className="block text-md text-gray-900 font-medium dark:text-gray-200">Categoria</label>
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
                     name='category'
                     value={category}
                     onChange={handleInputChange}>
                     <option defaultValue>Seleccione la categoria...</option>
                     <option value="PAPELERIA">Papeleria</option>
                     <option value="FARMACIA">Farmacia</option>
                     <option value="ASEO">Aseo</option>
                     <option value="HOGAR">Hogar</option>
                     <option value="FERRETERIA">Ferreteria</option>
                     <option value="OTROS">Otros</option>
                     <option value="PROMOCION">Promoci??n</option>
                  </select>
               </div>

               <div className='mt-3'>
                  <label className="block text-md text-gray-900 font-medium dark:text-gray-200">Imagen</label>
                  <input
                     name={'image'}
                     type={'file'}
                     className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                     onChange={handleFile}
                  />
               </div>

               <div className="mt-1">
                  <button
                     className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                     type="submit"
                  >
                     A??adir Producto
                  </button>
               </div>
            </div>
         </form>

      </div>
   )
}