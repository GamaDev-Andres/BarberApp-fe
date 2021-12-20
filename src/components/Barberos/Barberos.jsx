import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ListOfBarberos from "./ListOfBarberos";

const Barberos = () => {
  console.log(useParams());
  console.log(useLocation());
  return (
    <div>
      barberos container
      <div>
        <ListOfBarberos />
      </div>
    </div>
  );
};

export default Barberos;
