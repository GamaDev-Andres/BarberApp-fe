import React from "react";

import ListOfBarberos from "./ListOfBarberos";
import { StyledContainerBarberos } from "./styles";

const Barberos = () => {
  return (
    <StyledContainerBarberos>
      <h2>Barberos disponibles</h2>
      <ListOfBarberos />
    </StyledContainerBarberos>
  );
};

export default Barberos;
