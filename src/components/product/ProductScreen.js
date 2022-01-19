import React from 'react';

import { ProductAdd } from '../admin/product/ProductAdd';

export const ProductScreen = () => {
    return (
        <section className="bg-gray-100 mt-10">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl">
                    Añadir nuevos productos
                </h2>

                <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                        <ProductAdd />
                    </div>

                    <div className="relative h-64 lg:h-auto">
                        <ProductAdd />
                    </div>

                </div>
            </div>
        </section>
    )
}