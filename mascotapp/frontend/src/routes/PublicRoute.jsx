import React, { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to="/inicio" />;
};

export default PublicRoute;
