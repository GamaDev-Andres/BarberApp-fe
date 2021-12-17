import { useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import contextAuth from "../contexts/contextAuth/ContextAuth";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { token } = useContext(contextAuth);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
