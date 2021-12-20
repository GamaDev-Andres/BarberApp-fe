import styled from "styled-components";
import { Button, flex } from "../../../styles/utilStyles";

export const Header = styled.header`
  height: 50px;
  padding: 0.5rem 0;
  background-color: white;
  ${flex("row", "space-between")};
  z-index: 2;
  position: sticky;
  top: 0;
  width: 100%;
  h1 {
    color: ${(props) => props.theme.colors.azul};
  }
`;
export const ButtonMenu = styled(Button)`
  ${flex()};
  background-color: transparent;
  color: ${(props) => props.theme.colors.azul};
  font-size: 1.2rem;
  padding: 0;
  margin: 0 1rem;
`;
export const ButtonExit = styled(ButtonMenu)`
  color: ${(props) => props.theme.colors.rojo};
`;
