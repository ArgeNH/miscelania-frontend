import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ checking }) => {

   const { pathname } = useLocation();
   localStorage.setItem('lastPath', pathname);

   return checking
      ? <Outlet />
      : <Navigate to={`${localStorage.getItem('lastPath')}`} />;
};

PrivateRoute.propTypes = {
   checking: PropTypes.bool
};