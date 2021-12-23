import styled from "styled-components";
import { flex, grid, media } from "../../styles/utilStyles";
import imgPresentation from "../../../assets/img_fondo.jpg";

export const ContainerHomePresentacion = styled.main`
  flex-grow: 1;
`;
export const HeaderPresentationStyled = styled.header`
  width: 100%;
  height: calc(100vh - 50px);
  background-image: url(${imgPresentation});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  ${flex()};
  position: relative;
  &::after {
    content: "";
    max-width: 100%;
    display: block;
    top: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ContainerMsgBienvenida = styled.div`
  ${flex("column")};
  width: min(550px, 90%);
  color: ${(props) => props.theme.colors.claro};
  z-index: 1;
  backdrop-filter: blur(5px);
  border: 1px solid ${(props) => props.theme.colors.azul};

  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.rojo};
    backdrop-filter: blur(10px);

    h2 {
      color: ${(props) => props.theme.colors.rojo};
      border-bottom: 3px solid ${(props) => props.theme.colors.rojo};
    }
  }
  p {
    text-align: center;
  }
  h2 {
    transition: all 0.5s ease-in-out;
    border-bottom: 3px solid ${(props) => props.theme.colors.azul};
    padding-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.azulClaro};
  }
`;
export const ContainerCards = styled.div`
  ${grid(1)};
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const ContainerCard = styled.div`
  ${flex("column")};
  gap: 1rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.fondo};
  color: ${(props) => props.theme.colors.oscuro};
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.azul};

  h3 {
    color: ${(props) => props.theme.colors.azul};
    font-size: 1.6rem;
  }
  div {
    ${flex("column")};
    gap: 10px;
  }
`;
export const ContainerImgCard = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 1rem;
  }
`;
export const TitleSection = styled.h2`
  color: ${(props) => props.theme.colors.azul};
  font-size: 1.6rem;
  margin-top: 1rem;
`;
