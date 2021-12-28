import styled from "styled-components";
import { flex } from "../../styles/utilStyles";
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
  h2 {
    padding-bottom: 1rem;
  }
`;
export const ContainerFormCitas = styled(ContainerFormLogin)`
  width: min(450px, 90%);
  background-color: ${(props) => props.theme.colors.claro};
  padding: 1rem;
  border-radius: 1rem;
`;
export const ContainerCitas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: min-content;
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
  & > div {
    ${flex("column")};
    align-items: stretch;
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
  padding: 0.5rem;
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
    background-color: ${(props) => props.theme.colors.grisClaro};
  }
  width: min-content;
`;
export const StyledOptionsActionsCita = styled.div`
  display: block;
  position: absolute;
  top: 2rem;
  right: 1rem;
  border: 1px solid ${(props) => props.theme.colors.grisClaro};
  background-color: ${(props) => props.theme.colors.fondo};
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${(props) => props.theme.colors.grisClaro};
    position: absolute;
    top: -0.5rem;
    right: -1px;
  }
`;
export const StyledItemAction = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
  /* pointer-events: ${(props) =>
    props.loading === "true" ? "none" : "auto"}; */
  transition: all 0.3s ease;
  border-bottom: 1px solid ${(props) => props.theme.colors.grisClaro};
  ${flex("row", "flex-start")};
  gap: 10px;
  .sk-chase-dot:before {
    background-color: ${(props) => props.theme.colors.azul};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.grisClaro};
    color: ${(props) => props.theme.colors.claro};
  }
`;
