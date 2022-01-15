import React, { useCallback, useContext, useEffect, useState } from "react";
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
import { ModalPortal } from "../Modal/Modal";
import FormEditDataBarbero from "./FormEditDataBarbero";

const DetailsProfile = ({ currentBarbero }) => {
  const [open, setOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState({
    imagen: false,
    formulario: false,
  });

  const {
    editarUser,
    user: { perfil, id },
  } = useContext(contextAuth);
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
  const handleOpenModal = (type) => {
    setIsOpenModal({ ...isOpenModal, [type]: true });
  };
  const handleCloseModal = useCallback((type) => {
    setIsOpenModal({ ...isOpenModal, [type]: false });
  }, []);

  useEffect(() => {
    if (data) {
      const objPerfil = { perfil: { ...perfil, foto: data[0] } };
      editarUser(objPerfil).then((res) => {
        console.log("subida a databasae");
      });
    }
  }, [data]);
  return (
    <StyledContainerDetailsProfile>
      <StyledContainerImgProfile>
        <img
          onClick={() => handleOpenModal("imagen")}
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
            className="boton"
          >
            <i className="far fa-edit"></i>
          </Button>
        )}
      </StyledContainerImgProfile>
      <StyledContainerDescriptionProfile>
        {id === currentBarbero._id && (
          <ActionsMenu handleOpen={handleOpen} open={open}>
            <StyledItemAction onClick={() => handleOpenModal("formulario")}>
              Editar datos
            </StyledItemAction>
          </ActionsMenu>
        )}
        <div>
          <h4>Experiencia:</h4>
          <span>
            {currentBarbero.perfil?.experiencia || "Datos no agregados"}
          </span>
        </div>
        <div>
          <h4>Descripcion:</h4>
          <span>{currentBarbero.perfil?.descripcion || "Sin descripcion"}</span>
        </div>
      </StyledContainerDescriptionProfile>
      {isOpenModal.formulario && (
        <ModalPortal
          isOpen={isOpenModal.formulario}
          closeModal={() => handleCloseModal("formulario")}
        >
          <FormEditDataBarbero handleCloseModal={handleCloseModal} />
        </ModalPortal>
      )}
      {isOpenModal.imagen && (
        <ModalPortal
          isOpen={isOpenModal.imagen}
          closeModal={() => handleCloseModal("imagen")}
        >
          <img
            src={
              currentBarbero.perfil?.foto
                ? currentBarbero.perfil.foto
                : UserEmpty
            }
            alt={`foto de ${currentBarbero.nombre}`}
          />
        </ModalPortal>
      )}
    </StyledContainerDetailsProfile>
  );
};

export default DetailsProfile;
