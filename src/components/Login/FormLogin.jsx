import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import contextAuth from "../../contexts/contextAuth/ContextAuth";
import { validateSesion } from "../../helpers/validateForm";
import { Button, ContainerInput } from "../../styles/utilStyles";
import { MessageError } from "../Register/styles";
import { ContainerFormLogin, ParrafoAvisoRegister } from "./styles";
import SpinnerSmall from "../../components/Spinner/SpinnerSmall";

export const FormLogin = ({ isEmpleado }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { startLogin } = useContext(contextAuth);

  const mySubmit = async (data) => {
    const type = isEmpleado ? "empleado" : "user";
    setLoading(true);
    await startLogin(data, type);
    setLoading(false);

    reset();
  };
  return (
    <ContainerFormLogin>
      <form onSubmit={handleSubmit(mySubmit)}>
        <ContainerInput>
          <label htmlFor="correo">Correo</label>
          <input
            id="correo"
            type="email"
            name="email"
            placeholder="Ingrese su correo..."
            autoComplete="email"
            {...register("email", validateSesion.email)}
          />
        </ContainerInput>
        {errors.email && <MessageError>{errors.email.message}</MessageError>}

        <ContainerInput>
          <label htmlFor="password">contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Ingrese su contraseña..."
            {...register("password", validateSesion.password)}
          />
        </ContainerInput>
        {errors.password && (
          <MessageError>{errors.password.message}</MessageError>
        )}
        <Button disabled={loading} type="submit">
          {loading && <SpinnerSmall />}{" "}
          {isEmpleado ? "Ingresar como Empleado" : "Ingresar"}
        </Button>
        <ParrafoAvisoRegister>
          No tienes cuenta😢? <Link to="/register">Registrate aquí!</Link>
        </ParrafoAvisoRegister>
      </form>
    </ContainerFormLogin>
  );
};
