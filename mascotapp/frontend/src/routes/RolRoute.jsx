import React, { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

//Por ahora no lo uso
const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user.role === "cuidador" ? children : <Navigate to="/inicio" />;
};

export default PublicRoute;
