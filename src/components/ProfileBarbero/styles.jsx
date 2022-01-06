import styled from "styled-components";

export const StyledContainerProfileBarbero = styled.main`
  flex-grow: 1;
  max-width: 1200px;
`;

export const StyledContainerDetailsProfile = styled.header``;
export const StyledContainerImgProfile = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.grisClaro};
  img {
    border-radius: 50%;
    aspect-ratio: 1;
    width: 200px;
  }
`;
export const StyledContainerDescriptionProfile = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.azul};
  color: ${(props) => props.theme.colors.claro};
  span {
    font-size: 14px;
  }
  h4 {
    text-align: left;
    font-size: 1.2rem;
  }
`;

export const StyledContainerCalificacionesBarbero = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    width: 1.2rem;
    height: 1.2rem;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    div:nth-child(1) {
      background-color: black;
      height: 100%;
      flex-grow: 1;
    }
    div:nth-child(2) {
      flex-grow: 1;
      background-color: blue;
      height: 100%;
    }
  }
  svg {
    color: ${(props) => props.theme.colors.oscuro};
    &:hover {
      color: red;
    }
  }
`;
