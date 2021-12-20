import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AsideMenu from "../layout/asideMenu/AsideMenu";
import Footer from "../layout/footer/Footer";
import HeaderHome from "../layout/headerHome/HeaderHome";
import { ContainerHome } from "./styles";

const Home = () => {
  const [openAside, setOpenAside] = useState(false);
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
