import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ContainerInput } from "../../styles/utilStyles";
import { ParrafoAvisoRegister } from "../Login/styles";
import { ContainerFormRegister, MessageError } from "./styles";
import { validateSesion } from "../../helpers/validateForm";
const FormRegister = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  console.log(password);
  const mySubmit = (data) => {
    console.log(data);
    console.log(errors);
    reset();
  };
  return (
    <ContainerFormRegister>
      <form onSubmit={handleSubmit(mySubmit)}>
        <ContainerInput>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre..."
            autoComplete="given-name"
            {...register("nombre", validateSesion.nombre)}
          />
        </ContainerInput>
        {errors.nombre && <MessageError>{errors.nombre.message}</MessageError>}
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
            autoComplete="new-password"
            placeholder="nueva contraseña..."
            {...register("password", validateSesion.password)}
          />
        </ContainerInput>
        {errors.password && (
          <MessageError>{errors.password.message}</MessageError>
        )}

        <ContainerInput>
          <label htmlFor="confirm-password">confirmar contraseña</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="confirme su contraseña..."
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current || "Las contraseñas no coinciden",
            })}
          />
        </ContainerInput>
        {errors.confirmPassword && (
          <MessageError>{errors.confirmPassword.message}</MessageError>
        )}

        <Button type="submit">Registrarse</Button>
        <ParrafoAvisoRegister>
          Ya tienes cuenta😁? <Link to="/login">Ingresa aquí!</Link>
        </ParrafoAvisoRegister>
      </form>
    </ContainerFormRegister>
  );
};

export default FormRegister;
