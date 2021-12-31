import React from "react";
import { Button } from "../../styles/utilStyles";
import UserEmpty from "../../../assets/unnamed.png";
import {
  StyledCardBarbero,
  StyledContainerDescriptionBarbero,
  StyledContainerFotoBarbero,
} from "./styles";

const CardBarbero = () => {
  return (
    <StyledCardBarbero>
      <StyledContainerFotoBarbero>
        <picture>
          <img src={UserEmpty} alt="" />
        </picture>
        <div>
          <h4>Nombre:</h4>
          <span>mi nombre es juan</span>
        </div>
      </StyledContainerFotoBarbero>
      <StyledContainerDescriptionBarbero>
        <div>
          <h4>Descripcion:</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptatum expedita voluptatibus unde dicta quod ab
          </span>
        </div>
      </StyledContainerDescriptionBarbero>
    </StyledCardBarbero>
  );
};

export default CardBarbero;
