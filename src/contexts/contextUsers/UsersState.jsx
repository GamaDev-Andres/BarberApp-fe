import React, { useCallback, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getUrlBarberos,
  getUrlUpdateCliente,
  getUrlUpdateEmpleado,
} from "../../helpers/getUrls";
import { fetchToken } from "../../helpers/peticiones";
import types from "../../types/types";
import authReducer from "../contextAuth/authReducer";
import contextAuth from "../contextAuth/ContextAuth";
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
    const res = await fetchToken(url);
    const resjson = await res.json();

    if (!resjson.ok) {
      await Swal.fire("error", resjson.msg, "error");
      throw new Error(resjson.msg);
    }
    dispatch({ type: types.userSetBarberos, payload: resjson.empleados });
  }, []);

  return (
    <contextUsers.Provider value={{ getBarberos, barberos }}>
      {children}
    </contextUsers.Provider>
  );
};

export default UsersState;
