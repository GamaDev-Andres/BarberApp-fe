import React, { useCallback, useReducer } from "react";
import Swal from "sweetalert2";
import {
  getUrlCitas,
  getUrlDeleteCita,
  getUrlnewCita,
  getUrlUpdateCita,
} from "../../helpers/getUrls";
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
      await getCitas();
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
      if (!resjson.ok) {
        await Swal.fire("error", resjson.msg, "error");
        return;
      }
      dispatch({ type: types.citasGetCitas, payload: resjson.citas });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteCita = useCallback(async (id) => {
    const url = getUrlDeleteCita(id);
    try {
      const res = await fetchToken(url, "", "DELETE");
      const resjson = await res.json();
      if (!resjson.ok) {
        await Swal.fire("error", resjson.msg, "error");
        return;
      }

      deleteCitaState(id);
      await Swal.fire("Eliminada!", "Tu cita ha sido eliminada.", "success");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteCitaState = (id) => {
    dispatch({ type: types.citasDeleteCita, payload: id });
  };

  const editCita = useCallback(async (id, data) => {
    const url = getUrlUpdateCita(id);
    try {
      console.log(data);
      const res = await fetchToken(url, data, "PUT");
      const resjson = await res.json();
      console.log(resjson);
      if (!resjson.ok) {
        await Swal.fire("error", resjson.msg, "error");
        return;
      }
      await getCitas();
      await Swal.fire("Listo!", resjson.msg, "success");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <contextCitas.Provider
      value={{ citas, createCita, getCitas, deleteCita, editCita }}
    >
      {children}
    </contextCitas.Provider>
  );
};

export default CitasState;
