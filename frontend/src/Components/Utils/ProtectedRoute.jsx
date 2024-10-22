import React from 'react';
import { Navigate } from 'react-router-dom';

// Higher-order component for route protection based on role
const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/SignIn" />;
  }

  // if (userRole !== roleRequired) {
  //   // If the user's role doesn't match the required role, redirect to an appropriate page
  //   return <Navigate to={userRole === 'Admin' ? '/Admin/Dashboard' : '/Dashboard'} />;
  // }

  // If role matches, render the children (the page content)
  return children;
};

export default ProtectedRoute;
