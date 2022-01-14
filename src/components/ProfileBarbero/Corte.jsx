import React, { useContext, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import { ModalPortal } from "../Modal/Modal";
import { StyledContainerCorte } from "./styles";

const Corte = ({ corte }) => {
  const {
    user: { cortes },
    editarUser,
  } = useContext(contextAuth);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleOpenModalImg = () => {
    if (loading) return;
    console.log("open img");
    setIsModalOpen(true);
  };

  const handleDeleteFoto = async () => {
    if (loading) return;
    try {
      const res = await Swal.fire({
        title: "estas segur@?",
        text: "Quieres eliminar esta foto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminala!",
      });
      if (res.isConfirmed) {
        setLoading(true);
        const newArrCortes = cortes.filter((corteUser) => {
          return corteUser !== corte;
        });
        const objCortes = { cortes: newArrCortes };
        await editarUser(objCortes);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  return (
    <StyledContainerCorte>
      <img onClick={handleOpenModalImg} src={corte} alt="imagen corte" />
      <span onClick={handleDeleteFoto} title="eliminar foto">
        <i className="fas fa-times-circle"></i>
      </span>
      <ModalPortal isOpen={isModalOpen} closeModal={handleCloseModal}>
        <img src={corte} alt="imagen corte" />
      </ModalPortal>
    </StyledContainerCorte>
  );
};

export default Corte;
