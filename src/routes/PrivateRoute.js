import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {

   const { checking } = useSelector(state => state.auth);

   const { pathname} = useLocation();
   localStorage.setItem('lastPath', pathname );

   return checking
      ? children
      : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
   children: PropTypes.object.isRequired
};