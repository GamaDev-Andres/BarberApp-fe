import styled from "styled-components";

import { flex, media } from "../../styles/utilStyles";

export const StyledContainerProfileBarbero = styled.main`
  flex-grow: 1;
  max-width: 1200px;
  width: 100%;
  margin: 1rem auto;
`;

export const StyledContainerDetailsProfile = styled.header`
  ${media.sTablet} {
    display: flex;
  }
`;
export const StyledContainerImgProfile = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.fondo};
  ${media.sTablet} {
    width: min-content;
  }
  h2 {
    width: max-content;
  }
  img {
    border-radius: 50%;
    aspect-ratio: 1;
    width: 200px;
    object-fit: cover;
    cursor: pointer;
  }

  & > .boton {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    top: calc(50% + 100px - 32.23px);
    left: calc(50% + 100px - 45.41px);
    transition: none;
  }
`;
export const StyledContainerDescriptionProfile = styled.div`
  position: relative;
  padding: 1rem;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.azulClaro};
  span {
    color: ${(props) => props.theme.colors.claro};
    font-size: 14px;
  }
  h4 {
    color: ${(props) => props.theme.colors.claro};
    text-align: left;
    font-size: 1.2rem;
  }
`;

export const StyledContainerCalificacionesBarbero = styled.div`
  ${flex()};
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.fondo};
  & > div {
    ${flex()};
    align-items: stretch;
  }
`;
export const StyledPuntuacion = styled.div`
  ${flex("column")};
  background-color: ${(props) => props.theme.colors.azulClaro};
  padding: 1rem;
  border-radius: 10px 0px 0px 10px;
  color: ${(props) => props.theme.colors.claro};
  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;
export const StyledContainerStars = styled.div`
  ${flex()};
  padding: 1rem;
  border-radius: 0 10px 10px 0;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.grisClaro};

  & > div {
    &.active {
      svg {
        color: ${(props) => props.theme.colors.amarillo};
      }
    }
  }
`;
export const StyledContainerCortes = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 1rem;
  position: relative;
  h2 {
    margin-bottom: 1rem;
  }
`;
export const StyledContainerCorte = styled.div`
  background-color: ${(props) => props.theme.colors.fondoOscuro};
  display: grid;
  position: relative;
  & > span {
    position: absolute;
    justify-self: center;
    top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.fondoOscuro};
    transition: color 0.3s ease;
    &:hover {
      color: ${(props) => props.theme.colors.rojo};
    }
  }
  & > img {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const StyledContainerEditDataBarbero = styled.div`
  display: block;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.claro};
  border-radius: 1rem;
  width: min(600px, 90vw);
  margin: 0 !important;
  form {
    width: 100%;
    margin: 0;
    ${flex("column")};
    gap: 10px;
    align-items: stretch;
    button {
      ${flex()};
      gap: 5px;
    }
  }
`;
export const Icon = styled.i`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.amarillo};
  }
`;
