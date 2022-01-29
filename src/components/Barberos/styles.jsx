import styled from "styled-components";
import { flex } from "../../styles/utilStyles";

export const StyledContainerBarberos = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.fondo};
  h2 {
    margin-top: 1rem;
  }
`;
export const StyledContainerListBarberos = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 1rem;
  gap: 1rem;
`;
export const StyledCardBarbero = styled.div`
  ${flex("column")};
  align-items: stretch;
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
  & > div {
    position: relative;
    flex-grow: 1;
  }
`;
export const StyledContainerDescriptionBarbero = styled.div`
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.azul};
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.oscuro};
  background-color: white;
  h4 {
    text-align: left;
    color: ${(props) => props.theme.colors.azul};
  }
  span {
    font-size: 13px;
  }
  border-radius: 10px;
`;
