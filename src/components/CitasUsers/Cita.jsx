import React from "react";
import { Button } from "../../styles/utilStyles";
import {
  ContainerCita,
  ContainerFotoCita,
  ContainerInformacionCita,
} from "./styles";
import userEmpty from "../../../assets/unnamed.png";
import ActionsCitas from "./ActionsCitas";
import { useNavigate } from "react-router-dom";
const Cita = ({ cita }) => {
  const fecha = new Date(cita.fecha).toLocaleString();
  const Expiracion = new Date(cita.fecha).getTime() - new Date().getTime();
  const noDisponible = cita.estado === "rechazada" || Expiracion < 0;
  const navigate = useNavigate();

  const handleRedirectProfile = () => {
    navigate(`/barberos/${cita.barbero._id}`);
  };

  return (
    <ContainerCita noDisponible={noDisponible} estado={cita.estado}>
      <ActionsCitas cita={cita} />
      <h3>{cita.estado}</h3>
      <div>
        <ContainerFotoCita>
          <img src={userEmpty} alt="foto de barbero" />
          <Button
            tabIndex={noDisponible ? -1 : 0}
            onClick={handleRedirectProfile}
          >
            ver perfil
          </Button>
        </ContainerFotoCita>
        <ContainerInformacionCita>
          <div>
            <strong>Barbero: </strong>
            <p>{cita.barbero.nombre}</p>
          </div>
          <div>
            <strong>Fecha y Hora: </strong>
            <p>{fecha}</p>
          </div>
          <div>
            <strong>Observaciones: </strong>
            <p>{cita.observaciones}</p>
          </div>
        </ContainerInformacionCita>
      </div>
    </ContainerCita>
  );
};

export default Cita;
