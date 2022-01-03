import React from "react";
import { Button } from "../../styles/utilStyles";
import UserEmpty from "../../../assets/unnamed.png";
import {
  StyledCardBarbero,
  StyledContainerDescriptionBarbero,
  StyledContainerFotoBarbero,
} from "./styles";
import OptionsBarbero from "./OptionsBarbero";

const CardBarbero = ({ barbero }) => {
  return (
    <StyledCardBarbero>
      <StyledContainerFotoBarbero>
        <picture>
          <img
            src={barbero.pefil?.foto || UserEmpty}
            alt={`foto de ${barbero.nombre}`}
          />
        </picture>
        <div>
          <OptionsBarbero barbero={barbero} />

          <h4>Nombre:</h4>
          <span>{barbero.nombre}</span>
        </div>
      </StyledContainerFotoBarbero>
      <StyledContainerDescriptionBarbero>
        <div>
          <h4>Descripcion:</h4>
          <span>{barbero.perfil?.descripcion || "Sin descripcion"}</span>
        </div>
      </StyledContainerDescriptionBarbero>
    </StyledCardBarbero>
  );
};

export default CardBarbero;
