import React, { useCallback, useEffect, useReducer } from "react";
import types from "../../types/types";
import authReducer from "./AuthReducer";
import contextAuth from "./ContextAuth";
import { fetchSinToken, fetchToken } from "../../helpers/peticiones";
import Swal from "sweetalert2";
import {
  getUrlLoginEmpleado,
  getUrlLoginUser,
  getUrlNewEmpleado,
  getUrlNewUser,
  getUrlRefresh,
  getUrlValidAdmin,
} from "../../helpers/getUrls";

const initialState = {
  token: null,
  user: {},
};

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
    const url = getUrlRefresh();
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
      setNewToken();

      localStorage.clear();
      return;
    }
    if (user.id !== resjson.user.id) {
      loginUser(resjson);
    } else {
      setNewToken(resjson.token);
    }
  };

  const setNewToken = (token = "") => {
    dispatch({ type: types.authRefreshToken, payload: token });
  };

  const startRegister = useCallback(async (data, type) => {
    const url = type === "user" ? getUrlNewUser() : getUrlNewEmpleado();
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
    const { token, user } = data;
    localStorage.setItem("token", token);
    dispatch({
      type: types.authLogin,
      payload: { token, user },
    });
  }, []);

  const startLogin = useCallback(async (data, type) => {
    const url = type === "empleado" ? getUrlLoginEmpleado() : getUrlLoginUser();
    try {
      const res = await fetchSinToken(url, data, "POST");
      const resjson = await res.json();
      if (!resjson.ok) {
        Swal.fire("Error", resjson.msg, "error");
      } else {
        loginUser(resjson);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const signOutSesion = useCallback(() => {
    localStorage.removeItem("token");
    dispatch({ type: types.authLogout });
  }, []);
  const validarAdmin = useCallback(async (data) => {
    const url = getUrlValidAdmin();
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
        signOutSesion,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};

export default AuthState;
