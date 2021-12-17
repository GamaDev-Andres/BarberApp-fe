import styled from "styled-components";
import { media } from "../../styles/utilStyles";
import {
  ContainerFormLogin,
  ContainerLogin,
  TitleLogin,
} from "../Login/styles";

export const ContainerRegister = styled(ContainerLogin)``;
export const TitleRegister = styled(TitleLogin)``;
export const ContainerFormRegister = styled(ContainerFormLogin)``;
export const MessageError = styled.p`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.rojo};
  border-radius: 5px;
  color: white;
  width: 100%;
  font-size: 12px;
  text-align: center;
`;
