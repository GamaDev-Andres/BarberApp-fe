import React, { useCallback, useReducer } from "react";
import types from "../../types/types";
import authReducer from "./AuthReducer";
import contextAuth from "./ContextAuth";
const initialState = {
  // token: localStorage.getItem("token") || null,
  // user: {},
  token: false,
  user: { nombre: "juan" },
};
const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { token, user } = state;

  const registerUser = useCallback((data) => {
    dispatch({ type: types.authStartRegister });
  }, []);
  const loginUser = useCallback(
    (data) => {
      dispatch({ type: types.authLogin, payload: data });
    },
    [token]
  );
  return (
    <contextAuth.Provider
      value={{
        token,
        user,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};

export default AuthState;
