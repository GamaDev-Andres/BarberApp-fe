import React, { useCallback, useReducer } from "react";
import Swal from "sweetalert2";
import { getUrlBarberos, getUrlnewCita } from "../../helpers/getUrls";
import { fetchToken } from "../../helpers/peticiones";
import types from "../../types/types";
import contextUsers from "./contextUsers";
import usersReducer from "./usersReducer";

const initialState = {
  barberos: null,
};

const UsersState = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const { barberos } = state;

  const getBarberos = useCallback(async () => {
    const url = getUrlBarberos();
    try {
      const res = await fetchToken(url);
      const resjson = await res.json();
      console.log(resjson);
      if (!resjson.ok) {
        await Swal.fire("error", resjson.msg, "error");
        return;
      }
      dispatch({ type: types.userSetBarberos, payload: resjson.empleados });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createCita = useCallback(async (data) => {
    const url = getUrlnewCita();
    try {
      const res = await fetchToken(url, data, "POST");
      const resjson = await res.json();
      if (!resjson.ok) {
        await Swal.fire("error", resjson.msg, "error");
        return;
      }
      await Swal.fire("Listo!", resjson.msg, "success");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <contextUsers.Provider value={{ getBarberos, createCita, barberos }}>
      {children}
    </contextUsers.Provider>
  );
};

export default UsersState;
