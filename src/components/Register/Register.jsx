import React, { useState } from "react";

import { Button } from "../../styles/utilStyles";
import { FormAdmin } from "../Admin/FormAdmin";
import FormRegister from "./FormRegister";
import {
  ButtonAdmin,
  ContainerCabecera,
  ContainerRegister,
  TitleRegister,
} from "./styles";

const Register = () => {
  const [isEmpleado, setIsEmpleado] = useState(false);
  const [formAdmin, setFormAdmin] = useState(false);

  const handleFormAdmin = () => {
    if (isEmpleado) {
      setIsEmpleado(false);
    } else {
      setFormAdmin(!formAdmin);
    }
  };

  return (
    <ContainerRegister>
      <ContainerCabecera>
        <TitleRegister>
          {formAdmin
            ? "Contraseña de administrador"
            : isEmpleado
            ? "Register Empleado"
            : "Register"}
        </TitleRegister>
        <ButtonAdmin onClick={handleFormAdmin} bgr>
          {formAdmin || isEmpleado
            ? "desactivar modo admin"
            : "activar modo admin"}
        </ButtonAdmin>
      </ContainerCabecera>

      {formAdmin ? (
        <FormAdmin setIsEmpleado={setIsEmpleado} setFormAdmin={setFormAdmin} />
      ) : (
        <FormRegister isEmpleado={isEmpleado} />
      )}
    </ContainerRegister>
  );
};

export default Register;
