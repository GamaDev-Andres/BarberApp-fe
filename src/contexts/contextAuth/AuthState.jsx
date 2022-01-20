import React, { useCallback, useEffect, useReducer } from "react";
import Swal from "sweetalert2";

import types from "../../types/types";
import authReducer from "./AuthReducer";
import contextAuth from "./ContextAuth";
import { fetchSinToken, fetchToken } from "../../helpers/peticiones";
import {
  getUrlDeleteCorte,
  getUrlLoginEmpleado,
  getUrlLoginUser,
  getUrlNewEmpleado,
  getUrlNewUser,
  getUrlRefresh,
  getUrlUpdateCliente,
  getUrlUpdateEmpleado,
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
  const editarUser = useCallback(
    async (data, id) => {
      let url;
      if (data.calificacion) {
        url = getUrlUpdateEmpleado(id);
      } else {
        url =
          user.type === "empleado"
            ? getUrlUpdateEmpleado(user.id)
            : getUrlUpdateCliente(user.id);
      }

      try {
        const res = await fetchToken(url, data, "PUT");
        const resjson = await res.json();
        if (!resjson.ok) {
          await Swal.fire("error", resjson.msg, "error");
          return;
        }
        if (!id) {
          console.log("resjson", resjson);
          dispatch({ type: types.userEdit, payload: resjson.user });
        }
        await Swal.fire("Listo !", "edicion exitosa!", "success");
      } catch (error) {
        console.log(error);
      }
    },
    // NOTA : recuerda que si utilizas el state en tus funciones , cuando cambie el token o user,
    //cambiara el state , por lo tanto deberia volver a memorizarse la funcion
    [user]
  );
  const deleteCorte = useCallback(
    async (data) => {
      const url = getUrlDeleteCorte(user.id);
      try {
        const res = await fetchToken(url, data, "PUT");
        const resjson = await res.json();
        if (!resjson.ok) {
          await Swal.fire("error", resjson.msg, "error");
          return;
        }

        dispatch({ type: types.userEdit, payload: resjson.user });

        await Swal.fire("Listo !", "edicion exitosa!", "success");
      } catch (error) {
        console.log(error);
      }
    },
    [user]
  );
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
        editarUser,
        deleteCorte,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};

export default AuthState;
