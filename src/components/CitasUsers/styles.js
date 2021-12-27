import styled from "styled-components";
import { flex, media } from "../../styles/utilStyles";
import { ContainerFormLogin } from "../Login/styles";

export const ContainerNewCitaUsers = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.fondo};
  ${flex("column")};
  gap: 1rem;
  h2 {
    color: ${(props) => props.theme.colors.azul};
  }
`;
export const ContainerCitasUsers = styled(ContainerNewCitaUsers)`
  width: 100%;
  padding: 1rem;
  display: block;
`;
export const ContainerFormCitas = styled(ContainerFormLogin)`
  width: min(450px, 90%);
  background-color: ${(props) => props.theme.colors.claro};
  padding: 1rem;
  border-radius: 1rem;

  /* height: |; */
`;
export const ContainerCitas = styled.div`
  ${flex("column", "flex-start", "stretch")};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 10px;
  min-height: calc(100vh - 50px - 2rem - 54px);
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;
export const ContainerCita = styled.article`
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.oscuro};
  position: relative;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.grisClaro};
  min-height: 75px;
  & > div {
    ${flex("column")};
    gap: 10px;
    align-items: stretch;
    ${media.tablet} {
      flex-direction: row;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.oscuro};
  }
`;
export const ContainerFotoCita = styled.div`
  ${flex("column")};
  gap: 10px;
  max-width: 250px;
  margin: 0 auto;
  padding: 1rem;

  img {
    border-radius: 50%;
    aspect-ratio: 1;

    width: min(80%, 200px);
  }
`;
export const ContainerInformacionCita = styled.div`
  background-color: white;
  flex-grow: 1;
  padding: 1rem;
  ${flex("column", "flex-start", "stretch")};
`;
export const ContainerActionsCita = styled.div`
  ${flex()};
  position: absolute;
  cursor: pointer;
  border-radius: 1rem;
  top: 0.25rem;
  right: 0.5rem;
  padding: 0.5rem;
  transition: background-color 0.2s linear;
  svg {
    font-size: 1.2rem;
  }
  &:hover {
    background-color: grey;
  }
  width: min-content;
`;
