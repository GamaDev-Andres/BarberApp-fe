import React, { useContext, useEffect, useState } from "react";
import {
  StyledContainerDescriptionProfile,
  StyledContainerDetailsProfile,
  StyledContainerImgProfile,
} from "./styles";
import UserEmpty from "../../../assets/unnamed.png";
import ActionsMenu from "../layout/ActionsMenu/ActionsMenu";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import { Button } from "../../styles/utilStyles";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import useUpdateCloudinary from "../../hook/useUpdateCloudinary";

const DetailsProfile = ({ currentBarbero }) => {
  const [open, setOpen] = useState(false);
  const {
    user: { id },
  } = useContext(contextAuth);
  const { editarUser } = useContext(contextAuth);
  const {
    data,
    loading,
    handleOpen: handleOpenWidget,
  } = useUpdateCloudinary(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickAddFoto = () => {
    handleOpenWidget();
  };
  useEffect(() => {
    if (data) {
      const perfil = { perfil: { foto: data[0] } };
      editarUser(perfil).then((res) => {
        console.log("subida a databasae");
      });
    }
    return () => {};
  }, [data]);
  return (
    <StyledContainerDetailsProfile>
      <StyledContainerImgProfile>
        <img
          src={
            currentBarbero.perfil?.foto ? currentBarbero.perfil.foto : UserEmpty
          }
          alt={`foto de ${currentBarbero.nombre}`}
        />
        <div>
          <h2>{currentBarbero.nombre}</h2>
        </div>
        {id === currentBarbero._id && (
          <Button
            disabled={loading}
            onClick={handleClickAddFoto}
            htmlFor="input-file"
            className="boton"
          >
            <i className="far fa-edit"></i>
          </Button>
        )}
      </StyledContainerImgProfile>
      <StyledContainerDescriptionProfile>
        {id === currentBarbero._id && (
          <ActionsMenu handleOpen={handleOpen} open={open}>
            <StyledItemAction>Editar datos</StyledItemAction>
          </ActionsMenu>
        )}
        <div>
          <h4>Experiencia:</h4>
          <span>{currentBarbero.perfil?.experiencia || "12 años"}</span>
        </div>
        <div>
          <h4>Descripcion:</h4>
          <span>
            {currentBarbero.perfil?.descripcion ||
              "soy muy bueno en lo que hago"}
          </span>
        </div>
      </StyledContainerDescriptionProfile>
    </StyledContainerDetailsProfile>
  );
};

export default DetailsProfile;
