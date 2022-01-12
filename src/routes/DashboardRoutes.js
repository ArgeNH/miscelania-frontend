import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ShoppingScreen } from '../components/cart/ShoppingScreen';
import { Home } from '../components/home/Home';
import { Nabvar } from '../components/navbar/Nabvar';
import { ProductScreen } from '../components/product/ProductScreen';
import { PromotionScreen } from '../components/promotion/PromotionScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Nabvar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<ProductScreen />} />
                <Route path='/promociones' element={<PromotionScreen />} />
                <Route path='/compra' element={<ShoppingScreen />} />
            </Routes>
        </>
    )
}
