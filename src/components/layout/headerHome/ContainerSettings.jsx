import React, { useCallback, useContext, useRef, useState } from "react";

import contextAuth from "../../../contexts/contextAuth/ContextAuth";
import ButtonSettings from "./ButtonSettings";
import { ContainerSettingsStyled, InputNameStyled } from "./styles";

const ContainerSettings = () => {
  const {
    user: { nombre },
  } = useContext(contextAuth);
  const { editarUser } = useContext(contextAuth);

  const [editando, setEditando] = useState(false);
  const inputName = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editando) return;

    setEditando(false);
    await editarUser({ nombre: inputName.current.value });
  };

  const handleBlur = () => {
    if (!editando) return;
    inputName.current.value = nombre;
    setEditando(false);
  };

  const handleEdit = useCallback(() => {
    inputName.current.focus();
    setEditando(true);
  }, []);

  return (
    <ContainerSettingsStyled>
      <form onSubmit={handleSubmit}>
        <InputNameStyled
          onBlur={handleBlur}
          ref={inputName}
          readOnly={!editando}
          defaultValue={nombre}
        />
      </form>
      <ButtonSettings handleEdit={handleEdit} />
    </ContainerSettingsStyled>
  );
};

export default ContainerSettings;
