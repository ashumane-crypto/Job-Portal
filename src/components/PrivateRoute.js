import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = true; // change later when adding auth

  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;