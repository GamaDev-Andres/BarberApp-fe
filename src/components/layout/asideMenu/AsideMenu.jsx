import React from "react";
import { ButtonMenu } from "../headerHome/styles";
import { Aside } from "./styles";

const AsideMenu = ({ openAside, setOpenAside }) => {
  return (
    <Aside openAside={openAside}>
      <ButtonMenu onClick={() => setOpenAside(!openAside)}>Menu</ButtonMenu>
    </Aside>
  );
};

export default AsideMenu;
