import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, role }) {
  const { user } = useSelector(state => state.auth);

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) return <Navigate to="/dashboard" />;

  return children;
}

export default PrivateRoute;
