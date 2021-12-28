import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import contextCitas from "../../contexts/contextCitas/contextCitas";
import contextUsers from "../../contexts/contextUsers/contextUsers";
import { StyledItemAction } from "./styles";

const ItemsActionsBarbero = ({ cita }) => {
  const [loading, setLoading] = useState(false);
  const { deleteCita, editCita } = useContext(contextCitas);
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);
  const handleDelete = async () => {
    if (loading) return;
    const res = await Swal.fire({
      title: "estas segur@?",
      text: "Quieres eliminar esta cita?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminala!",
    });
    setLoading(true);
    if (res.isConfirmed) {
      await deleteCita(cita._id);
    }
    setLoading(false);
  };

  const handleAceptCita = async () => {
    try {
      setLoading(true);
      await editCita(cita._id, { estado: "aceptada" });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRejectCita = async () => {
    try {
      setLoading(true);
      await editCita(cita._id, { estado: "rechazada" });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cita.estado === "pendiente" && (
        <>
          <StyledItemAction
            onClick={handleAceptCita}
            loading={loading.toString()}
            role="menuitem"
            tabIndex={0}
          >
            <i className="fas fa-check-circle"></i>
            <span>Aceptar</span>
          </StyledItemAction>
          <StyledItemAction
            onClick={handleRejectCita}
            loading={loading.toString()}
            role="menuitem"
            tabIndex={0}
          >
            <i className="fas fa-minus-circle"></i>
            <span>Rechazar</span>
          </StyledItemAction>
        </>
      )}
      {cita.estado !== "pendiente" && (
        <StyledItemAction
          onClick={handleDelete}
          loading={loading.toString()}
          role="menuitem"
          tabIndex={0}
        >
          <i className="far fa-trash-alt"></i> <span>Eliminar</span>
        </StyledItemAction>
      )}
    </>
  );
};

export default ItemsActionsBarbero;
