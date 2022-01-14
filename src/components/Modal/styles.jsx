import styled from "styled-components";

export const StyledContainerModal = styled.div`
  background-color: ${(props) => props.theme.colors.oscuro};

  background-color: rgba(0, 0, 0, 0.5);
  /* opacity: 0.9; */
  display: grid;
  place-content: center;
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isOpen ? "grid" : "none")};
`;
export const StyledMidContainerModal = styled.div`
  position: relative;
  background-color: white;
  max-width: 1000px;
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
    max-width: 600px;
    max-height: 80vh;
  }
`;
