import React from "react";
import { Outlet } from "react-router-dom";

const HomeEmpleado = () => {
  return (
    <div>
      {" "}
      Home Empleado
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeEmpleado;
