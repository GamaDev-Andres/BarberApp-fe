import React, { useCallback, useReducer } from "react";
import Swal from "sweetalert2";
import { getUrlCitas, getUrlnewCita } from "../../helpers/getUrls";
import { fetchToken } from "../../helpers/peticiones";
import types from "../../types/types";
import { citasReducer } from "./citasReducer";
import contextCitas from "./contextCitas";

const initialState = {
  citas: null,
};

const CitasState = ({ children }) => {
  const [state, dispatch] = useReducer(citasReducer, initialState);
  const { citas } = state;

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
  const getCitas = useCallback(async () => {
    const url = getUrlCitas();
    try {
      const res = await fetchToken(url);
      const resjson = await res.json();
      console.log(resjson);
      if (!resjson.ok) {
        Swal.fire("error", resjson.msg, "error");
        return;
      }
      console.log("antes dispatch");
      dispatch({ type: types.citasGetCitas, payload: resjson.citas });
      console.log("despues dispatch");
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <contextCitas.Provider value={{ citas, createCita, getCitas }}>
      {children}
    </contextCitas.Provider>
  );
};

export default CitasState;
