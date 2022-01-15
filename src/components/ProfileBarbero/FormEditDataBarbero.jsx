import React, { useContext, useEffect, useState } from "react";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import { Button, ContainerInput } from "../../styles/utilStyles";
import SpinnerSmall from "../Spinner/SpinnerSmall";
import { StyledContainerEditDataBarbero } from "./styles";

const FormEditDataBarbero = ({ handleCloseModal }) => {
  const {
    user: { perfil },
    editarUser,
  } = useContext(contextAuth);
  const [objForm, setObjForm] = useState({
    experiencia: perfil.experiencia || "",
    descripcion: perfil.descripcion || "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const objPerfil = { perfil: { ...perfil, ...objForm } };
    setLoading(true);
    await editarUser(objPerfil);
    setLoading(false);
    handleCloseModal("formulario");
  };
  const handleChange = (e) => {
    setObjForm({ ...objForm, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <StyledContainerEditDataBarbero>
      <form onSubmit={handleSubmit}>
        <h2>Edita tu informacion</h2>
        <ContainerInput>
          <label htmlFor="experiencia-input">Experiencia</label>
          <textarea
            name="experiencia"
            value={objForm.experiencia}
            onChange={handleChange}
            id="experiencia-input"
            placeholder="Habla de tu experiencia"
            maxLength="128"
          ></textarea>
        </ContainerInput>
        <ContainerInput>
          <label htmlFor="description-input">Descripcion</label>
          <textarea
            name="descripcion"
            value={objForm.descripcion}
            onChange={handleChange}
            id="description-input"
            placeholder="Describe tu perfil"
            maxLength="256"
          ></textarea>
        </ContainerInput>
        <Button type="submit" disabled={loading}>
          {loading && <SpinnerSmall />}
          Editar
        </Button>
      </form>
    </StyledContainerEditDataBarbero>
  );
};

export default FormEditDataBarbero;
