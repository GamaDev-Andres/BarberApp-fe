import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import contextCitas from "../../contexts/contextCitas/contextCitas";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import SpinnerSmall from "../Spinner/SpinnerSmall";

const ItemsActionsBarbero = ({ cita, handleOpen }) => {
  const [loading, setLoading] = useState(false);
  const { deleteCita, editCita } = useContext(contextCitas);
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);
  const handleDelete = async () => {
    if (loading) return;
    try {
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleEstadoCita = async (estado) => {
    if (loading) return;

    try {
      setLoading(true);
      await editCita(cita._id, { estado });
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      handleOpen();
    }
  };
  return (
    <>
      {cita.estado === "pendiente" && (
        <>
          <StyledItemAction
            onClick={() => handleEstadoCita("aceptada")}
            loading={loading.toString()}
            role="menuitem"
            tabIndex={0}
            as="button"
          >
            {<span>{loading && <SpinnerSmall />}</span>}

            {!loading && (
              <span>
                <i className="fas fa-check-circle"></i>
              </span>
            )}
            <span>Aceptar</span>
          </StyledItemAction>
          <StyledItemAction
            onClick={() => handleEstadoCita("rechazada")}
            loading={loading.toString()}
            role="menuitem"
            tabIndex={0}
            as="button"
          >
            {<span>{loading && <SpinnerSmall />}</span>}

            {!loading && (
              <span>
                <i className="fas fa-minus-circle"></i>
              </span>
            )}
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
          as="button"
        >
          {<span>{loading && <SpinnerSmall />}</span>}

          {!loading && (
            <span>
              <i className="far fa-trash-alt"></i>
            </span>
          )}
          <span>Eliminar</span>
        </StyledItemAction>
      )}
    </>
  );
};

export default ItemsActionsBarbero;
