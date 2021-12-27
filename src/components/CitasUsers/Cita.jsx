import React from "react";
import { Button } from "../../styles/utilStyles";
import {
  ContainerActionsCita,
  ContainerCita,
  ContainerFotoCita,
  ContainerInformacionCita,
} from "./styles";
import userEmpty from "../../../assets/unnamed.png";
const Cita = ({ cita }) => {
  const fecha = new Date(cita.fecha).toLocaleString();
  return (
    <ContainerCita>
      <ContainerActionsCita role="button" tabIndex={0}>
        <i className="fas fa-ellipsis-h"></i>
      </ContainerActionsCita>
      <h3>cita pendiente</h3>
      <div>
        <ContainerFotoCita>
          <img src={userEmpty} alt="foto de barbero" />
          <Button>ver perfil</Button>
        </ContainerFotoCita>
        <ContainerInformacionCita>
          <div>
            <strong>Barbero: </strong>
            <p>juanito de tales</p>
          </div>
          <div>
            <strong>Fecha y Hora: </strong>
            <p>{fecha}</p>
          </div>
          <div>
            <strong>Observaciones: </strong>
            <p>{cita.observaciones}</p>
          </div>
          <div>
            <strong>Estado: </strong>
            <p>{cita.estado ? "Aceptada" : "Pendiente"}</p>
          </div>
        </ContainerInformacionCita>
      </div>
    </ContainerCita>
  );
};

export default Cita;
