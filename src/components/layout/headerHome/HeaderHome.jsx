import React from "react";
import { Button } from "../../../styles/utilStyles";
import { Header } from "./styles";

const HeaderHome = ({ setOpenAside }) => {
  return (
    <Header>
      <Button onClick={() => setOpenAside((openAside) => !openAside)}>
        Menu
      </Button>
      <h1>BarberApp</h1>
      <Button>Logout</Button>
    </Header>
  );
};

export default HeaderHome;
