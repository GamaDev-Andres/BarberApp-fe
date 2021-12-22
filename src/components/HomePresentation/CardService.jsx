import React from "react";
import { ContainerCard, ContainerImgCard } from "./styles";

const CardService = ({ service }) => {
  const { title, description, foto } = service;
  return (
    <ContainerCard>
      <ContainerImgCard>
        <img src={foto} alt={title} />
      </ContainerImgCard>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </ContainerCard>
  );
};

export default CardService;
