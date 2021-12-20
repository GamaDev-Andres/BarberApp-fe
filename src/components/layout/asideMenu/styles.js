import styled, { css } from "styled-components";

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  color: ${(props) => props.theme.colors.claro};
  transition: transform 0.3s ease-out;
  ${(props) =>
    props.openAside
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(-100%);
        `}
  width: min(400px, 90%);
  background-color: ${(props) => props.theme.colors.azul};
`;
