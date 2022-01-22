import styled from "styled-components";

import imgFondo from "../../../assets/imgbackground.jpg";
import { grid, media } from "../../styles/utilStyles";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.fondo};
  min-height: 100vh;
  position: relative;
  ${media.laptop} {
    ${grid(2)};
    position: unset;
  }
`;
export const ContainerImg = styled.div`
  background-image: url(${imgFondo});
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;
export const TitleSesion = styled.h1`
  position: absolute;
  top: 1rem;
  color: ${(props) => props.theme.colors.claro};
  width: 100%;
  margin: 0 auto;
  ${media.laptop} {
    color: ${(props) => props.theme.colors.azul};
  }
`;
