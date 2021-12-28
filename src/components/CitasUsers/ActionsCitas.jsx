import React, { useContext, useRef, useState } from "react";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import SpinnerSmall from "../Spinner/SpinnerSmall";
import ItemsActionsBarbero from "./ItemsActionsBarbero";
import ItemsActionsCliente from "./ItemsActionsCliente";
import { ContainerActionsCita, StyledOptionsActionsCita } from "./styles";

const ActionsCitas = ({ cita }) => {
  const [open, setOpen] = useState(false);
  const menuOptions = useRef();
  const {
    user: { type },
  } = useContext(contextAuth);

  const handleOpen = (e) => {
    setOpen(!open);
  };
  const handleOpenKeyEnter = (e) => {
    if (e.keyCode === 13 && e.target === menuOptions.current) {
      setOpen(!open);
    }
  };
  return (
    <>
      <ContainerActionsCita
        onKeyUp={handleOpenKeyEnter}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        ref={menuOptions}
      >
        <i className="fas fa-ellipsis-h"></i>
      </ContainerActionsCita>

      {open && (
        <StyledOptionsActionsCita open={open}>
          {type === "user" && <ItemsActionsCliente cita={cita} />}
          {type === "empleado" && <ItemsActionsBarbero cita={cita} />}
        </StyledOptionsActionsCita>
      )}
    </>
  );
};

export default ActionsCitas;
