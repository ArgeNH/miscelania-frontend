import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { Error } from '../alerts/Error';
import { InputRegister } from './InputRegister';

export const AuthRegister = () => {

    const navigate = useNavigate();

    const initialError = {
        name: '',
        done: true
    };

    const [error, setError] = useState(initialError);

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
        navigate('/login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || lastName === '' || password === '' ||
            passwordConfirmed === '' || email === '' || city === ''
            || address === '' || phone === '') {
            console.log('Rellene los campos vacios');
            setError({
                name: 'vacios',
                done: false
            });
        } else {
            if (password !== passwordConfirmed) {
                console.log('Son diferentes');
                setError({
                    name: 'dif',
                    done: false
                });
            } else {
                setError(initialError);
                fetch('https://miscelanea-api.herokuapp.com/api/user/signUp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        lastName,
                        password,
                        email,
                        city,
                        address,
                        phone
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => console.log(err));
            }
        }
    }

    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-gray-800 rounded-lg shadow-xl shadow-gray-900 backdrop-blur-sm dark:bg-gray-800 mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-200 dark:text-white">Registro de clientes</h2>
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
                            className=" basis-1 px-8 text-lg py-4 leading-5 text-gray-200 transition-colors duration-200 transform bg-gray-900 rounded-md  hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            onClick={handleSubmit}
                            type='submit'
                        >
                            Registrarse
                        </button>
                    </div>
                    <div className='justify-end mt-6'>
                        <a
                            className="basis-1 text-lg text-gray-200 cursor-pointer hover:text-gray-400 underline"
                            onClick={handleLogin}
                        >
                            Ya estoy registrado
                        </a>
                    </div>
                </form>
            </section>

            {
                (error.name === 'vacios' && error.done === false)
                    ?
                    <Error
                        name='Campos Vacios'
                        desc='Rellene los campos que se encuentran vacios'
                    />
                    :
                    null
            }

            {
                (error.name === 'dif' && error.done === false)
                    ?
                    <Error
                        name='Contrasenas diferentes'
                        desc='Porfavor verifique las contrasenas'
                    />
                    :
                    null
            }
        </>
    )
}