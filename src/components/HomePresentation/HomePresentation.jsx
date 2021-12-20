import React from "react";
import HeaderPresentation from "./HeaderPresentation";
import { ContainerHomePresentacion } from "./styles";

const HomePresentation = () => {
  return (
    <ContainerHomePresentacion>
      <HeaderPresentation />
      <div className="prueba"></div>
    </ContainerHomePresentacion>
  );
};

export default HomePresentation;
