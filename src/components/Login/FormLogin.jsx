import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { validateSesion } from "../../helpers/validateForm";
import { Button, ContainerInput } from "../../styles/utilStyles";
import { MessageError } from "../Register/styles";
import { ContainerFormLogin, ParrafoAvisoRegister } from "./styles";

export const FormLogin = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mySubmit = (data) => {
    console.log(data);
    console.log(errors);
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
        <Button type="submit">Ingresar</Button>
        <Button bgr type="submit">
          Ingresar como Admin
        </Button>
        <ParrafoAvisoRegister>
          No tienes cuenta😢? <Link to="/register">Registrate aquí!</Link>
        </ParrafoAvisoRegister>
      </form>
    </ContainerFormLogin>
  );
};
