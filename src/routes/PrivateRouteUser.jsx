import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import contextAuth from "../contexts/contextAuth/ContextAuth";

const PrivateRouteUser = () => {
  const {
    token,
    user: { type },
  } = useContext(contextAuth);
  return type === "user" ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouteUser;
