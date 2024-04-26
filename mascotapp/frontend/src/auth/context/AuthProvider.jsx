//Sirve para proveer la información a toda la aplicación

import { useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user, //Si el esuario existe, entonces doble negacion(true)
    user,
  };
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (userData) => {
    const action = { type: types.login, payload: userData };

    localStorage.setItem("user", JSON.stringify(userData));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
