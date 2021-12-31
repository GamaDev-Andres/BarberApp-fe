import React from "react";
import CardBarbero from "./CardBarbero";
import { StyledContainerListBarberos } from "./styles";

const ListOfBarberos = () => {
  return (
    <StyledContainerListBarberos>
      {[1, 2, 3, 4].map((el) => (
        <CardBarbero />
      ))}
    </StyledContainerListBarberos>
  );
};
export default ListOfBarberos;
