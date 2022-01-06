import React from "react";
import {
  StyledContainerDescriptionProfile,
  StyledContainerDetailsProfile,
  StyledContainerImgProfile,
} from "./styles";
import UserEmpty from "../../../assets/unnamed.png";

const DetailsProfile = ({ currentBarbero }) => {
  console.log("render");
  console.log(currentBarbero);
  return (
    <StyledContainerDetailsProfile>
      <StyledContainerImgProfile>
        <img
          src={currentBarbero.foto ? currentBarbero.foto : UserEmpty}
          alt={`foto de ${currentBarbero.nombre}`}
        />
        <div>
          <h4>Nombre:</h4>
          <span>{currentBarbero.nombre}</span>
        </div>
      </StyledContainerImgProfile>
      <StyledContainerDescriptionProfile>
        <div>
          <h4>Experiencia:</h4>
          <span>{currentBarbero.perfil?.experiencia || "12 años"}</span>
        </div>
        <div>
          <h4>Descripcion:</h4>
          <span>
            {currentBarbero.perfil?.descripcion ||
              "soy muy bueno en lo que hago"}
          </span>
        </div>
      </StyledContainerDescriptionProfile>
    </StyledContainerDetailsProfile>
  );
};

export default DetailsProfile;
