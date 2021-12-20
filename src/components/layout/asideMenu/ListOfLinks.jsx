import React from "react";
import { ContainerLinks, ItemLink } from "./styles";

const ListOfLinks = () => {
  return (
    <ContainerLinks>
      <ItemLink to="/citas">
        <i className="fas fa-calendar-day"></i>citas
      </ItemLink>
      <ItemLink to="/barberos">
        <i className="fas fa-users"></i>barberos
      </ItemLink>
      <ItemLink to="/barberos/21">
        <i className="fas fa-user"></i>barberos 21
      </ItemLink>
      <ItemLink to="/">
        <i className="fas fa-home"></i>home
      </ItemLink>
    </ContainerLinks>
  );
};

export default ListOfLinks;
