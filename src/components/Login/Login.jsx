import React, { useState } from "react";
import { ButtonAdmin, ContainerCabecera } from "../Register/styles";
import { FormLogin } from "./FormLogin";
import { ContainerLogin, TitleLogin } from "./styles";

const Login = () => {
  const [isEmpleado, setIsEmpleado] = useState(false);

  return (
    <>
      <ContainerLogin>
        <ContainerCabecera>
          <TitleLogin>{isEmpleado ? "Login Empleado" : "Login"}</TitleLogin>
          <ButtonAdmin onClick={() => setIsEmpleado(!isEmpleado)} bgr>
            {isEmpleado ? "desactivar modo empleado" : "activar modo empleado"}
          </ButtonAdmin>
        </ContainerCabecera>

        <FormLogin isEmpleado={isEmpleado} />
      </ContainerLogin>
    </>
  );
};

export default Login;
