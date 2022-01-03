import React, { useCallback, useContext, useState } from "react";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import ActionsMenu from "../layout/ActionsMenu/ActionsMenu";
import ItemsActionsBarbero from "./ItemsActionsBarbero";
import ItemsActionsCliente from "./ItemsActionsCliente";

const ActionsCitas = ({ cita }) => {
  const [open, setOpen] = useState(false);
  const expiracion = new Date(cita.fecha).getTime() - new Date().getTime();

  const {
    user: { type },
  } = useContext(contextAuth);

  const handleOpen = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const isVistaDeAcciones = cita.estado !== "aceptada" || expiracion < 0;

  return (
    <>
      {isVistaDeAcciones && (
        <ActionsMenu open={open} handleOpen={handleOpen}>
          {type === "user" && (
            <ItemsActionsCliente handleOpen={handleOpen} cita={cita} />
          )}
          {type === "empleado" && (
            <ItemsActionsBarbero handleOpen={handleOpen} cita={cita} />
          )}
        </ActionsMenu>
      )}
    </>
  );
};

export default ActionsCitas;
