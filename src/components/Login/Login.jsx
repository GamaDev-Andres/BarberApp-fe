import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ButtonAdmin, ContainerCabecera } from "../Register/styles";
import { FormLogin } from "./FormLogin";
import { ContainerLogin, TitleLogin } from "./styles";

const Login = () => {
  const [isEmpleado, setIsEmpleado] = useState(false);
  const [formAdmin, setFormAdmin] = useState(false);

  return (
    <>
      <ContainerLogin>
        {/* <Helmet>
          <title>BarberApp|Login</title>
          <meta name="description" content="pagína para logearse" />
        </Helmet> */}
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
