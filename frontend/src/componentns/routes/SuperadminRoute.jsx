import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const isSuperadmin = () => {
  const user = JSON.parse(localStorage.getItem('formData'));

  return user && user.role === 'superadmin';
};

const SuperadminRoute = ({ children }) => {
  const location = useLocation();

  return isSuperadmin() ? children : <Navigate to="/faculties" state={{ from: location }} />;
};

export default SuperadminRoute;