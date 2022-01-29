import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import contextUsers from "../../contexts/contextUsers/contextUsers";

import AsideMenu from "../layout/asideMenu/AsideMenu";
import Footer from "../layout/footer/Footer";
import HeaderHome from "../layout/headerHome/HeaderHome";
import { ContainerHome } from "./styles";

const Home = () => {
  const [openAside, setOpenAside] = useState(false);
  const { resetBarberos } = useContext(contextUsers);
  useEffect(() => {
    return () => {
      resetBarberos();
    };
  }, []);
  return (
    <ContainerHome>
      <HeaderHome setOpenAside={setOpenAside} />
      <AsideMenu openAside={openAside} setOpenAside={setOpenAside} />
      <Outlet />
      <Footer />
    </ContainerHome>
  );
};

export default Home;
