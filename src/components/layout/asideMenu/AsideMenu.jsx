import React from "react";
import ListOfLinks from "./ListOfLinks";
import {
  StyledAside,
  ButtonMenuAside,
  ContainerAside,
  HeaderAside,
} from "./styles";

const AsideMenu = ({ openAside, setOpenAside }) => {
  return (
    <>
      <ContainerAside
        onClick={() => setOpenAside(!openAside)}
        openAside={openAside}
      />
      <StyledAside openAside={openAside}>
        <HeaderAside>
          <ButtonMenuAside onClick={() => setOpenAside(!openAside)}>
            <i className="fas fa-bars"></i>
          </ButtonMenuAside>
          <h2>BarberApp</h2>
        </HeaderAside>
        <ListOfLinks />
      </StyledAside>
    </>
  );
};

export default AsideMenu;
