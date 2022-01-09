import React from "react";
import {
  StyledContainerCalificacionesBarbero,
  StyledContainerStars,
  StyledPuntuacion,
} from "./styles";

const CalificacionesBarbero = () => {
  return (
    <StyledContainerCalificacionesBarbero>
      <div>
        <StyledPuntuacion>
          <span>4.5</span>
        </StyledPuntuacion>
        <StyledContainerStars>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </StyledContainerStars>
      </div>
    </StyledContainerCalificacionesBarbero>
  );
};

export default CalificacionesBarbero;
