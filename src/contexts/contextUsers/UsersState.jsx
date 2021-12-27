import React, { useCallback, useContext, useReducer } from "react";
import Swal from "sweetalert2";
import {
  getUrlBarberos,
  getUrlnewCita,
  getUrlUpdateCliente,
  getUrlUpdateEmpleado,
} from "../../helpers/getUrls";
import { fetchToken } from "../../helpers/peticiones";
import types from "../../types/types";
import contextAuth from "../contextAuth/ContextAuth";
import contextUsers from "./contextUsers";
import usersReducer from "./usersReducer";

const initialState = {
  barberos: null,
};

const UsersState = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const { barberos } = state;
  const { user, token } = useContext(contextAuth);

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

  const editarUser = useCallback(
    async (data) => {
      const url =
        user.type === "empleado"
          ? getUrlUpdateEmpleado(user.id)
          : getUrlUpdateCliente(user.id);

      try {
        const res = await fetchToken(url, data, "PUT");
        const resjson = await res.json();
        if (resjson.ok) {
          dispatch({ type: types.userEditNombre, payload: data });
        }
      } catch (error) {
        console.log(error);
      }
    },
    // NOTA : recuerda que si utilizas el state en tus funciones , cuando cambie el token ,
    //cambiara el state , por lo tanto deberia volver a memorizarse la funcion
    [token]
  );

  return (
    <contextUsers.Provider value={{ getBarberos, editarUser, barberos }}>
      {children}
    </contextUsers.Provider>
  );
};

export default UsersState;
