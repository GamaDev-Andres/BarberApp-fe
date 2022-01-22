import styled from "styled-components";

import { flex } from "../../styles/utilStyles";

export const StyledContainerModal = styled.div`
  ${flex()};
  background-color: ${(props) => props.theme.colors.oscuro};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isOpen ? "grid" : "none")};
`;
export const StyledMidContainerModal = styled.div`
  position: relative;
  ${flex()};
  margin: 0 auto;
  & > span {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    color: white;
    margin: 0 auto;
    &:hover {
      color: ${(props) => props.theme.colors.rojo};
    }
    padding: 5px;
  }
  img {
    max-width: 100%;
    max-height: 80vh;
  }
`;
