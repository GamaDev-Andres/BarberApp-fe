import React from "react";
import { Helmet } from "react-helmet";
import FormRegister from "./FormRegister";
import { ContainerRegister, TitleRegister } from "./styles";

const Register = () => {
  return (
    <>
      <ContainerRegister>
        <Helmet>
          <title>BarberApp|Register</title>
          <meta name="description" content="pagína para registrarse" />
        </Helmet>
        <TitleRegister>Register</TitleRegister>

        <FormRegister />
      </ContainerRegister>
    </>
  );
};

export default Register;
