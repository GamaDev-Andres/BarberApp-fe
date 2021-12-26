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
export const ContainerFormCitas = styled(ContainerFormLogin)`
  width: min(450px, 90%);
  background-color: ${(props) => props.theme.colors.claro};
  padding: 1rem;
  border-radius: 1rem;

  /* height: |; */
`;
