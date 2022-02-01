import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {

   const { loading } = useSelector(state => state.ui);

   return loading
      ? <Navigate to='/' />
      : children;
};
PublicRoute.propTypes = {
   children: PropTypes.object.isRequired
};