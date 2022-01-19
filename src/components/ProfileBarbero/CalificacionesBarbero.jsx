import React, { useContext, useMemo, useState } from "react";
import Swal from "sweetalert2";

import contextAuth from "../../contexts/contextAuth/ContextAuth";
import contextUsers from "../../contexts/contextUsers/contextUsers";
import {
  Icon,
  StyledContainerCalificacionesBarbero,
  StyledContainerStars,
  StyledPuntuacion,
} from "./styles";

const CalificacionesBarbero = ({ currentBarbero }) => {
  const { editarUser, user } = useContext(contextAuth);
  const { getBarberos } = useContext(contextUsers);
  const [loading, setLoading] = useState(false);

  const handleCalificacion = async (numb) => {
    if (loading) return;
    if (user.type === "empleado") return;
    if (currentBarbero.calificacion.some((el) => el.uid === user.id)) {
      await Swal.fire(
        "Aviso",
        "Ya has calificado a este barbero anteriormente",
        "info"
      );
      return;
    }
    const userCalificacion = { uid: user.id, value: numb };

    setLoading(true);
    await editarUser({ calificacion: userCalificacion }, currentBarbero._id);
    await getBarberos();
    setLoading(false);
  };

  const promedio = useMemo(() => {
    const res = currentBarbero.calificacion.reduce((aux, el) => {
      return (aux += el.value);
    }, 0);
    return res / currentBarbero.calificacion.length;
  }, [currentBarbero]);

  return (
    <StyledContainerCalificacionesBarbero>
      <div>
        <StyledPuntuacion>
          <span>{promedio || 0}</span>
          <small>
            {currentBarbero.calificacion.length === 1
              ? `${currentBarbero.calificacion.length} voto`
              : `${currentBarbero.calificacion.length} votos`}
          </small>
        </StyledPuntuacion>
        <StyledContainerStars>
          {[1, 2, 3, 4, 5].map((el) => (
            <div
              className={`${el <= promedio ? "active" : "no"}`}
              onClick={() => handleCalificacion(el)}
              key={el}
            >
              <Icon estrellas={promedio} className={`fas fa-star`}></Icon>
            </div>
          ))}
        </StyledContainerStars>
      </div>
    </StyledContainerCalificacionesBarbero>
  );
};

export default CalificacionesBarbero;
