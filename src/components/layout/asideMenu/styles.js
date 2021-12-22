import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { flex } from "../../../styles/utilStyles";
import { ButtonMenu } from "../headerHome/styles";

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  color: ${(props) => props.theme.colors.claro};
  transition: transform 0.3s ease-out;
  ${(props) =>
    props.openAside
      ? css`
          transform: translateX(0%);
          z-index: 9999;
        `
      : css`
          transform: translateX(-100%);
          /* z-index: 1; */
        `}
  width: min(400px, 90%);
  background-color: ${(props) => props.theme.colors.azul};
`;
export const ButtonMenuAside = styled(ButtonMenu)`
  color: ${(props) => props.theme.colors.claro};
  position: absolute;
  left: 3rem;
  top: 1rem;
  font-size: 1.1rem;
  margin: 0;
`;
export const HeaderAside = styled.div`
  ${flex()};
  padding: 0.5rem 0;
  h2 {
    width: 100%;
  }
`;
export const ContainerAside = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;

  ${(props) =>
    props.openAside
      ? css`
          opacity: 1;
          z-index: 2;
        `
      : css`
          opacity: 0;
          z-index: -1;
        `};
`;
export const ItemLink = styled(NavLink)`
  ${flex()};
  gap: 1rem;
  justify-content: flex-start;
  position: relative;
  padding: 1.25rem;
  font-size: 1.1rem;
  padding-left: 3rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.azulOscuro};
  color: ${(props) => props.theme.colors.claro};

  svg {
    width: 1rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: ${(props) => props.theme.colors.claro};
    top: 0;
    bottom: 0;
    margin-right: 1rem;
    transition: all 0.5s ease;
    width: 1rem;
    border-radius: 0px 5px 5px 0px;
    transform: translateX(-400%);
  }
  &.active {
    background-color: ${(props) => props.theme.colors.azulOscuro};
    &::before {
      transform: translateX(-300%);
    }
  }
`;
export const ContainerLinks = styled.div`
  ${flex("column")};
  margin-top: 1rem;
`;
