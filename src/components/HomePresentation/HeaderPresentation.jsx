import React from "react";

import { ContainerMsgBienvenida, HeaderPresentationStyled } from "./styles";

const HeaderPresentation = () => {
  return (
    <HeaderPresentationStyled>
      <ContainerMsgBienvenida>
        <h2>Bienvenidos a BarberApp!</h2>
        <p>
          Ponte cómodo y navega en nuestra aplicación en donde podras darte
          diferentes gustos revisando perfiles de tus barberos favoritos y
          siendo aún mejor , podras agendar citas con ellos y así probar su
          talento en carne propia!
        </p>
      </ContainerMsgBienvenida>
    </HeaderPresentationStyled>
  );
};

export default HeaderPresentation;
