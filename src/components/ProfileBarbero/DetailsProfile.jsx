import React, { useState } from "react";
import {
  StyledContainerDescriptionProfile,
  StyledContainerDetailsProfile,
  StyledContainerImgProfile,
} from "./styles";
import UserEmpty from "../../../assets/unnamed.png";
import ActionsMenu from "../layout/ActionsMenu/ActionsMenu";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import { Button } from "../../styles/utilStyles";

const DetailsProfile = ({ currentBarbero }) => {
  console.log("render");
  console.log(currentBarbero);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <StyledContainerDetailsProfile>
      <StyledContainerImgProfile>
        <img
          src={currentBarbero.foto ? currentBarbero.foto : UserEmpty}
          alt={`foto de ${currentBarbero.nombre}`}
        />
        <div>
          <h2>{currentBarbero.nombre}</h2>
        </div>
        <Button className="boton">
          <i className="far fa-edit"></i>
        </Button>
      </StyledContainerImgProfile>
      <StyledContainerDescriptionProfile>
        <ActionsMenu handleOpen={handleOpen} open={open}>
          <StyledItemAction>Editar datos</StyledItemAction>
        </ActionsMenu>
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
