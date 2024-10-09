import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  // Check if token exists
  const token = localStorage.getItem('token'); // Token is stored in localStorage

  // If token does not exist, redirect to the login page
  if (!token) {
    return <Navigate to="/SignIn" replace />;
  }

  // If token exists, render the children components (i.e., the protected page)
  return children;
};

export default ProtectedRoute;
