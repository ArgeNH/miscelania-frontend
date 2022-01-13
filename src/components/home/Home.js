import React from 'react';

import { CardProduct } from './CardProduct';
import './home.css';

export const Home = () => {
    return (
        <>

            <div className="container px-20 py-16 mx-auto sm:px-6">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-2xl" src="https://merakiui.com/_nuxt/img/Catalogue-pana.32658f1.svg" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                    <CardProduct
                        route='/productos'
                        nameCategory='Papeleria'
                        img='https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80'
                    />

                    <CardProduct
                        route='/productos'
                        nameCategory='Farmacia'
                        img='https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80'
                    />

                    <CardProduct
                        route='/productos'
                        nameCategory='Aseo'
                        img='https://www.prensacooperativa.com/wp-content/uploads/2020/06/tema-4-nazareth.jpg'
                    />

                    <CardProduct
                        route='/productos'
                        nameCategory='Hogar'
                        img='https://http2.mlstatic.com/D_NQ_NP_982681-MLM41652043024_052020-O.jpg'
                    />

                    <CardProduct
                        route='/productos'
                        nameCategory='Ferreteria'
                        img='https://images.unsplash.com/photo-1605900009749-b3cdb75ce9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                    />

                    <CardProduct
                        route='/productos'
                        nameCategory='Otros'
                        img='https://images.unsplash.com/photo-1601598838108-5019bf3ea4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    />

                </div>
            </div>

        </>

    )
}