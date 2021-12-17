import React from "react";
import { Helmet } from "react-helmet";
import { FormLogin } from "./FormLogin";
import { ContainerLogin, TitleLogin } from "./styles";

const Login = () => {
  return (
    <>
      <ContainerLogin>
        <Helmet>
          <title>BarberApp|Login</title>
          <meta name="description" content="pagína para logearse" />
        </Helmet>
        <TitleLogin>Login</TitleLogin>
        <FormLogin />
      </ContainerLogin>
    </>
  );
};

export default Login;
