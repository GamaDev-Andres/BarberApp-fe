import styled from "styled-components";
import { flex, grid } from "../../styles/utilStyles";

export const StyledContainerBarberos = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.fondo};
`;
export const StyledContainerListBarberos = styled.div`
  ${grid(1)};
  padding: 1rem;
  gap: 1rem;
`;
export const StyledCardBarbero = styled.div`
  ${flex("column")};
  gap: 10px;
  border: 1px solid ${(props) => props.theme.colors.grisClaro};
  border-radius: 10px;
  padding: 0.5rem;
`;
export const StyledContainerFotoBarbero = styled.div`
  ${flex("row", "flex-start")};
  width: 100%;
  gap: 10px;
  picture {
    margin: 0 auto;
    /* width: 80%; */
    max-width: 40px;
    img {
      aspect-ratio: 1;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  h4 {
    text-align: left;
  }
  div {
    flex-grow: 1;
  }
`;
export const StyledContainerDescriptionBarbero = styled.div`
  h4 {
    text-align: left;
    color: ${(props) => props.theme.colors.azul};
  }
  span {
    font-size: 13px;
  }
  border-radius: 10px;

  border: 1px solid ${(props) => props.theme.colors.azul};
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.oscuro};
  background-color: white;
`;
