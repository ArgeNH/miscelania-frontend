import React from 'react';
import './home.css';

export const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Esto es Home</h1>
            <div>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-700">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className=" bg-white group relative rounded shadow-2xl">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$35</p>
                            </div>
                        </div>
                        <a href="#" className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="olive" className="w-full h-full object-center object-cover group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">
                                Nomad Tumbler
                            </h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                $35
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}