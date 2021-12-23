import React from "react";
import { useNavigate } from "react-router-dom";
import { H1 } from "../../../styles/utilStyles";
import ContainerSettings from "./ContainerSettings";
import { ButtonMenu, Header } from "./styles";

const HeaderHome = ({ setOpenAside }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Header>
      <div>
        <ButtonMenu
          onClick={() => setOpenAside((openAside) => !openAside)}
          title="Abrir menu"
        >
          <i className="fas fa-bars"></i>
        </ButtonMenu>
        <H1 onClick={handleRedirect}>BarberApp</H1>
      </div>

      <ContainerSettings />
    </Header>
  );
};

export default HeaderHome;
