import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProfileBarbero = () => {
  console.log(useParams());
  console.log(useLocation());
  return <div>perfil del barbero</div>;
};

export default ProfileBarbero;
