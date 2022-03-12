import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
import { useTitle } from '../../hooks/useTitle';
import { Error } from '../alerts/Error';
import { InputRegister } from './InputRegister';

export const AuthRegister = () => {

   useTitle('Register');

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { msgError, nameError } = useSelector(state => state.ui);

   const [formValues, handleInputChange] = useForm({
      name: '',
      lastName: '',
      password: '',
      passwordConfirmed: '',
      email: '',
      city: '',
      address: '',
      phone: ''
   });

   const {
      name, lastName,
      password, passwordConfirmed,
      email, city,
      address, phone } = formValues;

   const handleLogin = () => {
      dispatch(removeError());
      navigate('/login');
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid()) {
         dispatch(startRegister(name, lastName, password, email, city, address, phone));
      }
   }

   const isValid = () => {
      if (name.trim().length === 0) {
         dispatch(setError('El campo de nombre esta vacio', 'Nombre'));
         return false;
      } else if (lastName.trim().length === 0) {
         dispatch(setError('El campo de apellido esta vacio', 'Apellido'));
         return false;
      } else if (password !== passwordConfirmed || password.length < 5) {
         dispatch(setError('Las contraseñas no coinciden', 'Contraseña'));
         return false;
      } else if (!validator.isEmail(email)) {
         dispatch(setError('El email no es correcto', 'Email'));
         return false;
      } else if (city.trim().length === 0) {
         dispatch(setError('El campo de ciudad se encuentra vacio', 'Ciudad'));
         return false;
      } else if (address.trim().length === 0) {
         dispatch(setError('El campo de direccion se encuentra vacio', 'Direccion'));
         return false;
      } else if (phone.trim().length === 0) {
         dispatch(setError('El campo de telefono se encuentra vacio', 'Telefono'));
         return false;
      }
      dispatch(removeError());
      return true;
   }

   return (
      <div className='h-[100vh] bg-gradient-to-br from-blue-300 to-indigo-600 flex justify-center items-center w-[100vw]'>
         <section className=" p-5 mx-auto bg-white rounded-lg backdrop-blur-sm">
            <h2 className="text-center text-2xl font-semibold text-gray-600">Registro de clientes 🙍🏻‍♀️🙍🏻‍♂️</h2>
            <form>
               <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                  <InputRegister
                     label='Nombre'
                     name='name'
                     type='text'
                     place='ej. John'
                     value={name}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Apellido'
                     name='lastName'
                     type='text'
                     place='ej. Doe'
                     value={lastName}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Contraseña'
                     name='password'
                     type='password'
                     place='ej. ********'
                     value={password}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Confirmacion Contraseña'
                     name='passwordConfirmed'
                     type='password'
                     place='ej. ********'
                     value={passwordConfirmed}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Correo'
                     name='email'
                     type='email'
                     place='ej. John@gmail.com'
                     value={email}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Ciudad'
                     name='city'
                     type='text'
                     place='ej. Tota'
                     value={city}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Direccion'
                     name='address'
                     type='text'
                     place='ej. Calle 10 #21-12'
                     value={address}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Celular'
                     name='phone'
                     type='number'
                     place='ej. ##########'
                     value={phone}
                     handle={handleInputChange}
                  />

               </div>
               <div className="flex justify-end mt-6">
                  <button
                     className="mb-2 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
                     onClick={handleSubmit}
                     type='submit'
                  >
                     Registrarse
                  </button>
               </div>

               <a
                  className="text-md font-bold text-blue-400 dark:text-blue-500 hover:underline cursor-pointer"
                  onClick={handleLogin}
               >
                  Ya estoy registrado
               </a>

            </form>
            {
               msgError &&
               (
                  <Error name={nameError} desc={msgError} />
               )
            }
         </section>
      </div>
   )
}