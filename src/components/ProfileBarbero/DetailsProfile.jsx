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
  const { data, loading, handleOpen: handleOpenWidget } = useUpdateCloudinary();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    const fileInput = e.target.files[0];
    console.log(fileInput);
    reader.readAsDataURL(fileInput);

    reader.onload = function () {
      console.log(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  };

  const handleClickFoto = () => {
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
        {
          id === currentBarbero._id && (
            <Button
              disabled={loading}
              onClick={handleClickFoto}
              htmlFor="input-file"
              className="boton"
            >
              <i className="far fa-edit"></i>
            </Button>
          )
          // )}
          // <input
          //   onChange={handleChangeFile}
          //   accept="image/*"
          //   type="file"
          //   id="input-file"
          // />
        }
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
