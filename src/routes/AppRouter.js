import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthLogin } from '../components/auth/AuthLogin';
import { AuthRegister } from '../components/auth/AuthRegister';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<AuthLogin />} />
                <Route path='/register' element={<AuthRegister />} />

                <Route path='/*' element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
