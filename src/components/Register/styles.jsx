import styled from "styled-components";
import { Button, flex } from "../../styles/utilStyles";
import {
  ContainerFormLogin,
  ContainerLogin,
  TitleLogin,
} from "../Login/styles";

export const ContainerRegister = styled(ContainerLogin)``;
export const TitleRegister = styled(TitleLogin)``;
export const ContainerFormRegister = styled(ContainerFormLogin)``;
export const ButtonAdmin = styled(Button)`
  font-size: 12px;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: -10px;
  right: 0;
  color: ${(props) => props.theme.colors.azul};
`;
export const MessageError = styled.p`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.rojo};
  border-radius: 5px;
  color: white;
  width: 100%;
  font-size: 12px;
  text-align: center;
`;
export const ContainerCabecera = styled.div`
  ${flex()};
  position: relative;
  width: 100%;
`;
