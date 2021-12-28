import React from "react";
import { Button } from "../../styles/utilStyles";
import {
  ContainerCita,
  ContainerFotoCita,
  ContainerInformacionCita,
} from "./styles";
import userEmpty from "../../../assets/unnamed.png";
import ActionsCitas from "./ActionsCitas";
const Cita = ({ cita }) => {
  const fecha = new Date(cita.fecha).toLocaleString();
  return (
    <ContainerCita estado={cita.estado}>
      <ActionsCitas cita={cita} />
      <h3>{cita.estado}</h3>
      <div>
        <ContainerFotoCita>
          <img src={userEmpty} alt="foto de barbero" />
          <Button>ver perfil</Button>
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
