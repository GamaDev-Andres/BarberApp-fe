import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import contextCitas from "../../contexts/contextCitas/contextCitas";
import SpinnerSmall from "../Spinner/SpinnerSmall";
import { StyledItemAction } from "./styles";

const ItemsActionsCliente = ({ cita }) => {
  const { citas, deleteCita } = useContext(contextCitas);
  const [loading, setLoading] = useState(false);

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
  const handleEdit = async () => {
    if (loading) return;
    try {
      setLoading(true);
      // await
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledItemAction
        loading={loading.toString()}
        onClick={handleEdit}
        role="menuitem"
        tabIndex={0}
      >
        <span>{loading && <SpinnerSmall />}</span>
        {!loading && (
          <span>
            <i className="far fa-edit"></i>
          </span>
        )}
        <span>Editar</span>
      </StyledItemAction>
      <StyledItemAction
        loading={loading.toString()}
        onClick={handleDelete}
        role="menuitem"
        tabIndex={0}
      >
        <span>{loading && <SpinnerSmall />}</span>
        {!loading && (
          <span>
            <i className="far fa-trash-alt"></i>
          </span>
        )}

        <span>Eliminar</span>
      </StyledItemAction>
    </>
  );
};

export default ItemsActionsCliente;
