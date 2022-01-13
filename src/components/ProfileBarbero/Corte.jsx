import React from "react";
import { StyledContainerCorte } from "./styles";

const Corte = ({ corte }) => {
  const handleOpenModalImg = () => {
    console.log("open img");
  };
  return (
    <StyledContainerCorte>
      <img onClick={handleOpenModalImg} src={corte} alt="imagen corte" />
    </StyledContainerCorte>
  );
};

export default Corte;
