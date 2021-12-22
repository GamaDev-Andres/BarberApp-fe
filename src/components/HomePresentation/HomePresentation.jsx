import React from "react";
import HeaderPresentation from "./HeaderPresentation";
import SectionServices from "./SectionServices";
import { ContainerHomePresentacion } from "./styles";

const HomePresentation = () => {
  return (
    <ContainerHomePresentacion>
      <HeaderPresentation />
      <SectionServices />
      <div className="prueba"></div>
    </ContainerHomePresentacion>
  );
};

export default HomePresentation;
