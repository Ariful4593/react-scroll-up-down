import React from "react";

const ProtectedRoute = ({ user, Navigate, Outlet }) => {
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
