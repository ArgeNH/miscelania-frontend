import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { startChecking } from '../actions/auth';

import { AuthLogin } from '../components/auth/AuthLogin';
import { AuthRegister } from '../components/auth/AuthRegister';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

   const dispatch = useDispatch();
   const { _id } = useSelector(state => state.auth);

   useEffect(() => {
         dispatch(startChecking());
   }, [dispatch]);

   return (
      <BrowserRouter>
         <Routes>

            <Route path='/*' element={<PublicRoute checking={!!_id} />}>
               <Route path='login' element={<AuthLogin />} />
               <Route path='register' element={<AuthRegister />} />
            </Route>

            {/* <Route
               path='/login'
               element={
                  <PublicRoute checking={!!_id}>
                     <AuthLogin />
                  </PublicRoute>
               }
            />

            <Route
               path='/register'
               element={
                  <PublicRoute checking={!!_id}>
                     <AuthRegister />
                  </PublicRoute>
               }
            /> */}

            <Route path='/*' element={<PrivateRoute checking={!!_id} />}>
               <Route path='*' element={<DashboardRoutes />} />
            </Route>

            {/* <Route path='/*'
               element={
                  <PrivateRoute checking={!!_id}>
                     <DashboardRoutes />
                  </PrivateRoute>
               }
            /> */}
         </Routes>
      </BrowserRouter>
   )
}
