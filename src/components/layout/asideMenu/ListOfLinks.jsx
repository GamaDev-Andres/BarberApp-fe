import React, { useContext } from "react";
import contextAuth from "../../../contexts/contextAuth/ContextAuth";
import { ButtonSignOutAside, ContainerLinks, ItemLink } from "./styles";

const ListOfLinks = () => {
  const { signOutSesion } = useContext(contextAuth);
  const handleSignOut = () => {
    signOutSesion();
  };

  return (
    <ContainerLinks>
      <ItemLink to="/">
        <i className="fas fa-home"></i>home
      </ItemLink>
      <ItemLink to="/citas">
        <i className="fas fa-calendar-day"></i>citas
      </ItemLink>
      <ItemLink to="/barberos">
        <i className="fas fa-users"></i>barberos
      </ItemLink>
      <ItemLink to="/barberos/21">
        <i className="fas fa-user"></i>barberos 21
      </ItemLink>
      <ButtonSignOutAside onClick={handleSignOut} as="button">
        <i className="fas fa-users"></i>Cerrar Sesion
      </ButtonSignOutAside>
    </ContainerLinks>
  );
};

export default ListOfLinks;
