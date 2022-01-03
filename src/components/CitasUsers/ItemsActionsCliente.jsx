import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import contextCitas from "../../contexts/contextCitas/contextCitas";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import SpinnerSmall from "../Spinner/SpinnerSmall";

const ItemsActionsCliente = ({ cita }) => {
  const { deleteCita } = useContext(contextCitas);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
  const handleEdit = async () => {
    if (loading) return;
    console.log(navigate("/newcita/" + cita._id));
    try {
      console.log("??");
      // setLoading(true);
      // // await
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cita.estado == "pendiente" && (
        <StyledItemAction
          loading={loading.toString()}
          onClick={handleEdit}
          role="menuitem"
          tabIndex={0}
          as="button"
        >
          <span>{loading && <SpinnerSmall />}</span>
          {!loading && (
            <span>
              <i className="far fa-edit"></i>
            </span>
          )}
          <span>Editar</span>
        </StyledItemAction>
      )}
      <StyledItemAction
        loading={loading.toString()}
        onClick={handleDelete}
        role="menuitem"
        tabIndex={0}
        as="button"
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
