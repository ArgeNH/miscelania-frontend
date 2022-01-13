import React from 'react';

import { CardProduct } from './CardProduct';
import './home.css';

export const Home = () => {
    return (
        <>

            <section>
                <div className="max-w-screen-xl mt-10 px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-2 lg:items-center">
                        <div className="max-w-lg mx-auto text-center lg:text-left lg:py-10">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Online Shopping
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Nos ubicamos en el departamento de Boyaca, en el municipio de Tota.

                            </p>
                        </div>

                        <div className="relative h-60">
                            <img
                                className="absolute inset-0 object-contain w-full h-full rounded-xl"
                                src="/assets/logo.png"
                                alt="Miscelanea Rodriguez"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <hr className='hr mt-10 sm:mt-2' />

            <div className="flex items-center justify-center">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                    <CardProduct
                        route='/papeleria'
                        nameCategory='Papeleria'
                        img='https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80'
                    />

                    <CardProduct
                        route='/farmacia'
                        nameCategory='Farmacia'
                        img='https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80'
                    />

                    <CardProduct
                        route='/aseo'
                        nameCategory='Aseo'
                        img='https://www.prensacooperativa.com/wp-content/uploads/2020/06/tema-4-nazareth.jpg'
                    />

                    <CardProduct
                        route='/hogar'
                        nameCategory='Hogar'
                        img='https://http2.mlstatic.com/D_NQ_NP_982681-MLM41652043024_052020-O.jpg'
                    />

                    <CardProduct
                        route='/ferreteria'
                        nameCategory='Ferreteria'
                        img='https://images.unsplash.com/photo-1605900009749-b3cdb75ce9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                    />

                    <CardProduct
                        route='/otros'
                        nameCategory='Otros'
                        img='https://images.unsplash.com/photo-1601598838108-5019bf3ea4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    />

                </div>
            </div>

        </>

    )
}