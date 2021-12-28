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
  box-shadow: 2px 2px 3px grey;
  & > div {
    ${flex()}
    gap:10px;
  }
  h1 {
    color: ${(props) => props.theme.colors.azul};
    display: block;
    @media (max-width: 480px) {
      display: none;
    }
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
export const ButtonOption = styled(ButtonMenu)`
  ${flex("row", "flex-start")};
  gap: 10px;
  margin: 0;
  color: ${(props) =>
    props.delete ? props.theme.colors.rojo : props.theme.colors.oscuro};
  padding: 5px 0;
  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.oscuro};
  }
`;
export const ButtonSettingStyled = styled(ButtonMenu)`
  color: ${(props) => props.theme.colors.oscuro};
  position: relative;
  transform: height 0.5s linear;
  &:hover {
    transform: none;
    & > div {
      overflow: hidden;
      padding: 0.5rem;
      visibility: visible;
      max-height: max-content;
      transform: none;
      div:hover {
        transform: none;
      }
    }
  }
`;
export const ContainerOptionsSettings = styled.div`
  ${flex("column", "center", "stretch")};
  width: max-content;
  position: absolute;
  background-color: ${(props) => props.theme.colors.fondo};
  border: 1px solid #c3c3c3;
  top: 110%;
  right: 25%;
  padding: 0.5rem;
  border-radius: 5px;

  overflow: hidden;
  padding: 0;
  max-height: 0px;
  visibility: hidden;
`;
export const InputNameStyled = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0;
  text-align: end;
  max-width: 240px;
`;
export const ContainerSettingsStyled = styled.div`
  ${flex()};
`;
