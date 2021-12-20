import styled from "styled-components";
import { flex } from "../../styles/utilStyles";

export const ContainerHome = styled.div`
  min-height: 100vh;
  ${flex("column")}
  background-color: ${(props) => props.theme.colors.fondo};
`;
