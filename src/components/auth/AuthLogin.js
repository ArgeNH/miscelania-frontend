import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { startLoginWithEmailAndPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
import { useTitle } from '../../hooks/useTitle';
import { Error } from '../alerts/Error';

export const AuthLogin = () => {

   useTitle('Login');

   const dispatch = useDispatch();
   const { msgError, nameError } = useSelector(state => state.ui);

   const [formValues, handleInputChange] = useForm({
      email: 'arge@gmail.com',
      password: '123456'
   });

   const { email, password } = formValues;

   const navigate = useNavigate();

   const handleRegister = () => {
      dispatch(removeError());
      navigate('/register', {
         replace: true
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid()) {
         dispatch(startLoginWithEmailAndPassword(email, password));
      }
   }

   const isValid = () => {
      if (!validator.isEmail(email)) {
         dispatch(setError('El email es incorrecto', 'Email'));
         return false;
      } else if (password.length === 0) {
         dispatch(setError('El campo de contraseña esta vacio', 'Contraseña'));
         return false;
      }
      dispatch(removeError());
      return true;
   }

   return (
      <>

         <div className="font-sans">
            <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-indigo-600">
               <div className="relative mt-20">
                  <div className="card bg-indigo-700 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                  <div className="card bg-indigo-300 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                  <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                     <h1 className="text-center text-2xl font-semibold text-gray-600">Miscelánea Rodríguez 🛒</h1>
                     <form className="mt-5">

                        <div>
                           <label className="block mb-1 text-gray-600 font-semibold">Correo</label>
                           <input
                              className="bg-indigo-100 px-4 py-2 outline-none rounded-md w-full mb-1"
                              name='email'
                              type="email"
                              placeholder="ej. John@gmail.com"
                              aria-label="Email Address"
                              value={email}
                              onChange={handleInputChange} />
                        </div>
                        <div>
                           <label className="block mb-1 text-gray-600 font-semibold">Contraseña</label>
                           <input
                              className="bg-indigo-100 px-4 py-2 outline-none rounded-md w-full"
                              name='password'
                              type="password"
                              placeholder="Password"
                              aria-label="Password"
                              value={password}
                              onChange={handleInputChange}
                           />
                        </div>

                        <div className="mt-7">
                           <button
                              className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                              type='onsubmit'
                              onClick={handleSubmit}
                           >
                              Iniciar Sesión
                           </button>
                        </div>

                        <div className="flex items-center text-center">
                           <div className="mt-2">
                              <div className="flex justify-center items-center">
                                 <label className="mr-2" >¿Eres nuevo?</label>
                                 <a
                                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 cursor-pointer"
                                    onClick={handleRegister}
                                 >
                                    Crea una cuenta
                                 </a>
                              </div>
                           </div>
                        </div>
                     </form>
                     {
                        msgError &&
                        (
                           <Error name={nameError} desc={msgError} />
                        )
                     }
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}