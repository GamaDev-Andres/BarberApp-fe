import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import contextAuth from "../contexts/contextAuth/ContextAuth";

const PrivateRoute = () => {
  const { token } = useContext(contextAuth);
  console.log("??");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
