import styled from "styled-components";

import { flex } from "../../../styles/utilStyles";

export const StyledContainerActions = styled.div`
  ${flex()};
  position: absolute;
  background-color: white;
  cursor: pointer;
  z-index: 2;
  border-radius: 1rem;
  top: 0.25rem;
  right: 0.5rem;
  padding: 0.5rem;
  transition: background-color 0.2s linear;
  svg {
    font-size: 1.2rem;
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.grisClaro};
  }
  width: min-content;
`;
export const StyledOptionsActions = styled.div`
  display: block;
  position: absolute;
  z-index: 2;

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
  width: 100%;
  pointer-events: ${(props) => (props.loading === "true" ? "none" : "auto")};
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
