import React, { useContext } from "react";
import contextAuth from "../../../contexts/contextAuth/ContextAuth";
import { Button } from "../../../styles/utilStyles";
import { ButtonExit, ButtonMenu, Header } from "./styles";

const HeaderHome = ({ setOpenAside }) => {
  const { signOutSesion } = useContext(contextAuth);
  const hanleSignOut = () => {
    signOutSesion();
  };
  return (
    <Header>
      <ButtonMenu
        onClick={() => setOpenAside((openAside) => !openAside)}
        title="Abrir menu"
      >
        <i className="fas fa-bars"></i>
      </ButtonMenu>
      <h1>BarberApp</h1>
      <ButtonExit onClick={hanleSignOut} title="Cerrar sesion">
        <i className="fas fa-sign-out-alt"></i>
      </ButtonExit>
    </Header>
  );
};

export default HeaderHome;
