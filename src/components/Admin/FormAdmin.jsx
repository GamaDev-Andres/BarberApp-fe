import { useForm } from "react-hook-form";
import { validateSesion } from "../../helpers/validateForm";
import { Button, ContainerInput } from "../../styles/utilStyles";
import { MessageError } from "../Register/styles";
import SpinnerSmall from "../Spinner/SpinnerSmall";
import { useContext, useState } from "react";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import { ContainerFormLogin, ParrafoAvisoRegister } from "../Login/styles";
export const FormAdmin = ({ setFormAdmin, setIsEmpleado }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { validarAdmin } = useContext(contextAuth);
  const mySubmit = async (data) => {
    setLoading(true);
    const isValid = await validarAdmin(data);
    setLoading(false);
    if (isValid) {
      setIsEmpleado(true);
      setFormAdmin(false);
    } else {
      setIsEmpleado(false);
    }

    reset();
  };
  return (
    <ContainerFormLogin>
      <form onSubmit={handleSubmit(mySubmit)}>
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
          {loading && <SpinnerSmall />} Enviar
        </Button>
        <ParrafoAvisoRegister onClick={() => setFormAdmin(false)}>
          No eres admin 😅? Regresa Aqui!
        </ParrafoAvisoRegister>
      </form>
    </ContainerFormLogin>
  );
};
