import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ checking }) => {

   return checking
      ? <Navigate to='/' />
      : <Outlet />;
};
PublicRoute.propTypes = {
   checking: PropTypes.bool
};