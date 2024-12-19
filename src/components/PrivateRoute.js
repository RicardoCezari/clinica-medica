// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Se não estiver autenticado, redireciona para o login
    return <Navigate to="/login" />;
  }

  // Se autenticado, renderiza o componente
  return <Component {...rest} />;
};

export default PrivateRoute;
