import styled from "styled-components";
import { Button, flex } from "../../../styles/utilStyles";

export const Header = styled.header`
  height: 50px;
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme.colors.azul};
  ${flex("row", "space-between  ")};

  position: sticky;
  top: 0;
  width: 100%;
  h1 {
    color: ${(props) => props.theme.colors.claro};
  }
`;
export const ButtonMenu = styled(Button)``;
