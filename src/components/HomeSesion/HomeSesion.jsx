import React from "react";
import { Outlet } from "react-router-dom";
import { Container, ContainerImg, TitleSesion } from "./styles";

const HomeSesion = () => {
  return (
    <Container>
      <TitleSesion>BARBERAPP</TitleSesion>
      <ContainerImg />
      <Outlet />
    </Container>
  );
};

export default HomeSesion;
