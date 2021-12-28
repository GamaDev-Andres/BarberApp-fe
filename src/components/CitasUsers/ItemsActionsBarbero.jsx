import React, { useState } from "react";
import { StyledItemAction } from "./styles";

const ItemsActionsBarbero = ({ cita }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <StyledItemAction loading={loading} role="menuitem" tabIndex={0}>
        <i class="fas fa-check-circle"></i>
        <span>Aceptar</span>
      </StyledItemAction>
      <StyledItemAction loading={loading} role="menuitem" tabIndex={0}>
        <i class="fas fa-minus-circle"></i>
        <span>Rechazar</span>
      </StyledItemAction>
      <StyledItemAction loading={loading} role="menuitem" tabIndex={0}>
        <i class="far fa-trash-alt"></i> <span>Eliminar</span>
      </StyledItemAction>
    </>
  );
};

export default ItemsActionsBarbero;
