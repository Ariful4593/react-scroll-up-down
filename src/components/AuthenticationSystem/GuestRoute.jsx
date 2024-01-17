import React from "react";

const GuestRoute = ({ user, Navigate, Outlet }) => {
  if (user) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
};

export default GuestRoute;
