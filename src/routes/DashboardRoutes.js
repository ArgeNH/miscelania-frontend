import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Admin } from '../components/admin/Admin';
import { Orders } from '../components/admin/user/Orders';
import { OrderSelected } from '../components/admin/user/OrderSelected';
import { Error404 } from '../components/alerts/Error404';

import { ShoppingScreen } from '../components/cart/ShoppingScreen';
import { Footer } from '../components/footer/Footer';
import { Cancel } from '../components/home/Cancel';
import { Home } from '../components/home/Home';
import { Success } from '../components/home/Success';
import { Nabvar } from '../components/navbar/Nabvar';
import { Cleanliness } from '../components/product/category/Cleanliness';
import { IronStore } from '../components/product/category/IronStore';
import { Menage } from '../components/product/category/Menage';
import { Others } from '../components/product/category/Others';
import { Pharmacy } from '../components/product/category/Pharmacy';
import { Stationery } from '../components/product/category/Stationery';
import { ProductScreen } from '../components/product/ProductScreen';
import { ProductSelected } from '../components/product/ProductSelected';
import { PromotionScreen } from '../components/promotion/PromotionScreen';

export const DashboardRoutes = () => {
   return (
      <>
         <Nabvar />
         <div className='container mx-auto px-4'>
            <Routes>
               <Route path='' element={<Home />} />
               <Route path='promociones' element={<PromotionScreen />} />
               <Route path='papeleria' element={<Stationery />} />
               <Route path='farmacia' element={<Pharmacy />} />
               <Route path='aseo' element={<Cleanliness />} />
               <Route path='hogar' element={<Menage />} />
               <Route path='ferreteria' element={<IronStore />} />
               <Route path='otros' element={<Others />} />
               <Route path='404' element={<Error404 />} />

               <Route path='productos/:code/:name' element={<ProductSelected />} />
               <Route path='productos' element={<ProductScreen />} />
               <Route path='compra' element={<ShoppingScreen />} />
               <Route path='gracias' element={<Success />} />
               <Route path='cancelado' element={<Cancel />} />
               <Route path='order' element={<Orders />} />
               <Route path='order/:id' element={<OrderSelected />} />
               <Route path='admin' element={<Admin />} />

               <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
         </div>
         <Footer />
      </>
   )
}
