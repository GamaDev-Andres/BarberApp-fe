import React, { useContext } from "react";
import contextAuth from "../../../contexts/contextAuth/ContextAuth";
import {
  ButtonOption,
  ContainerOptionsSettings,
  ButtonSettingStyled,
} from "./styles";

const ButtonSettings = ({ handleEdit }) => {
  const {
    signOutSesion,
    user: { type },
  } = useContext(contextAuth);
  const hanleSignOut = () => {
    signOutSesion();
  };

  return (
    <ButtonSettingStyled>
      {type === "empleado" ? (
        <i className="far fa-user-circle"></i>
      ) : (
        <i className="fas fa-cog"></i>
      )}
      <ContainerOptionsSettings>
        <ButtonOption as="div" onClick={handleEdit}>
          <i className="far fa-edit"></i>
          <span>Editar nombre</span>
        </ButtonOption>
        {type === "empleado" && (
          <ButtonOption as="div">
            <i className="fas fa-user"></i>
            <span>Mi perfil</span>
          </ButtonOption>
        )}
        <ButtonOption
          as="div"
          delete
          onClick={hanleSignOut}
          title="Cerrar sesion"
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Cerrar sesion</span>
        </ButtonOption>
      </ContainerOptionsSettings>
    </ButtonSettingStyled>
  );
};

export default ButtonSettings;
