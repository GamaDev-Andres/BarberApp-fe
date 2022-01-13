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
  img {
    border-radius: 50%;
    aspect-ratio: 1;
    width: 200px;
    object-fit: cover;
  }
  & > [type="file"] {
    display: none;
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
  background-color: ${(props) => props.theme.colors.azulClaro};
  padding: 1rem;
  border-radius: 10px 0px 0px 10px;
  span {
    color: ${(props) => props.theme.colors.claro};
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

  svg {
    color: ${(props) => props.theme.colors.oscuro};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.amarillo};
    }
  }
`;
export const StyledContainerCortes = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  padding-bottom: 1rem;
  position: relative;
  h2 {
    margin-bottom: 1rem;
  }
  input {
    display: none;
  }
`;
export const StyledContainerCorte = styled.div`
  background-color: ${(props) => props.theme.colors.fondoOscuro};
  display: grid;
  img {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1;
    object-fit: cover;
    cursor: pointer;
  }
`;
