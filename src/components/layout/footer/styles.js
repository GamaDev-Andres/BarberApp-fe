import styled from "styled-components";
import { flex } from "../../../styles/utilStyles";

export const ContainerFooter = styled.footer`
  padding: 1rem;
  p {
    text-align: center;

    color: ${(props) => props.theme.colors.claro};
  }
  ${flex()};
  background-color: ${(props) => props.theme.colors.azul};
`;
