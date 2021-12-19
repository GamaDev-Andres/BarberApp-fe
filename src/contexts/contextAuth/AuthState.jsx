import React, { useCallback, useEffect, useReducer } from "react";
import types from "../../types/types";
import authReducer from "./AuthReducer";
import contextAuth from "./ContextAuth";
import { fetchSinToken, fetchToken } from "../../helpers/peticiones";
import { handleErrors } from "../../helpers/handleErrors";
import Swal from "sweetalert2";

const initialState = {
  token: null,
  user: {},
};
const base = import.meta.env.VITE_REACT_APP_URL_BASE;

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { token, user } = state;
  useEffect(() => {
    async function refrescandoToken() {
      await refreshToken();
    }
    refrescandoToken();
  }, []);

  const refreshToken = async () => {
    const url = base + "/api/refresh";
    const res = await fetchToken(url);
    const resjson = await res.json();
    if (!resjson.ok) {
      if (localStorage.getItem("token")) {
        await Swal.fire(
          "error",
          "tu sesion caduco, inicia sesion de nuevo.",
          "error"
        );
      }
      localStorage.clear();
    } else {
      loginUser(resjson);
    }
  };

  const startRegister = useCallback(async (data, type) => {
    const url =
      base + (type === "user" ? "/api/users/new" : "/api/empleados/new");
    try {
      const res = await fetchSinToken(url, data, "POST");
      const resjson = await res.json();
      const mensaje = resjson.msg;
      if (!resjson.ok) {
        await Swal.fire("error", mensaje, "error");
      } else {
        await Swal.fire("Bien!", "Registro exitoso!", "success");
        loginUser(resjson);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const loginUser = useCallback((data) => {
    const { token, ok, user } = data;
    localStorage.setItem("token", token);
    dispatch({
      type: types.authLogin,
      payload: { token, user },
    });
  }, []);
  const startLogin = useCallback(async (data, type) => {
    const url =
      type === "empleado" ? base + "/api/empleados" : base + "/api/users";
    try {
      const res = await fetchSinToken(url, data, "POST");
      const resjson = await res.json();
      console.log(resjson);
      if (!resjson.ok) {
        Swal.fire("Error", resjson.msg, "error");
      } else {
        loginUser(resjson);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const validarAdmin = useCallback(async (data) => {
    const url = base + "/api/admin";
    const res = await fetchSinToken(url, data, "POST");
    const resjson = await res.json();
    if (!resjson.ok) {
      Swal.fire("Error", resjson.msg, "error");
      return false;
    } else {
      return true;
    }
  }, []);
  return (
    <contextAuth.Provider
      value={{
        token,
        user,
        loginUser,
        startRegister,
        startLogin,
        validarAdmin,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};

export default AuthState;
