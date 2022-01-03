import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import contextCitas from "../../contexts/contextCitas/contextCitas";
import ActionsMenu from "../layout/ActionsMenu/ActionsMenu";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import SpinnerSmall from "../Spinner/SpinnerSmall";

const OptionsBarbero = ({ barbero }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { selectBarbero } = useContext(contextCitas);
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleOpen = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleAgendarCita = () => {
    console.log("agendando cita");
    selectBarbero(barbero._id);
    navigate("/newcita");
  };
  const handleRedirectProfile = () => {
    console.log("redirect perfil");
    navigate(`/barberos/${barbero._id}`);
  };
  return (
    <>
      <ActionsMenu open={open} handleOpen={handleOpen}>
        <StyledItemAction
          onClick={handleAgendarCita}
          loading={loading.toString()}
          role="menuitem"
          tabIndex={0}
          as="button"
        >
          {<span>{loading && <SpinnerSmall />}</span>}

          {!loading && (
            <span>
              <i className="far fa-calendar-check"></i>
            </span>
          )}
          <span>Agendar Cita</span>
        </StyledItemAction>
        <StyledItemAction
          onClick={handleRedirectProfile}
          loading={loading.toString()}
          role="menuitem"
          tabIndex={0}
          as="button"
        >
          {<span>{loading && <SpinnerSmall />}</span>}

          {!loading && (
            <span>
              <i className="far fa-user-circle"></i>
            </span>
          )}
          <span>Ver perfil</span>
        </StyledItemAction>
      </ActionsMenu>
    </>
  );
};

export default OptionsBarbero;
