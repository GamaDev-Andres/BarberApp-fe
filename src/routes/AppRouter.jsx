import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Spinner from "../components/Spinner/Spinner";
import contextAuth from "../contexts/contextAuth/ContextAuth";
import PrivateRouteUser from "./PrivateRouteUser";

const PageNotFound = React.lazy(() =>
  import("../components/pageNotFound/PageNotFound")
);
const HomeEmpleado = React.lazy(() =>
  import("../components/HomeEmpleado/HomeEmpleado")
);
const HomePresentation = React.lazy(() =>
  import("../components/HomePresentation/HomePresentation")
);
const Barberos = React.lazy(() => import("../components/Barberos/Barberos"));
const ProfileBarbero = React.lazy(() =>
  import("../components/ProfileBarbero/ProfileBarbero")
);
const CitasUsers = React.lazy(() =>
  import("../components/CitasUsers/CitasUsers")
);
const CitasBarbero = React.lazy(() =>
  import("../components/CitasBarbero/CitasBarbero")
);

const Home = React.lazy(() => import("../components/Home/Home"));
const HomeSesion = React.lazy(() =>
  import("../components/HomeSesion/HomeSesion")
);
const Login = React.lazy(() => import("../components/Login/Login"));
const Register = React.lazy(() => import("../components/Register/Register"));

const AppRouter = () => {
  const {
    user: { type },
    token,
  } = useContext(contextAuth);
  const isUser = type === "user";

  if (token === null) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />}>
              <Route index element={<HomePresentation />} />
              <Route path="/barberos/:id" element={<ProfileBarbero />} />
              <Route
                path="/citas"
                element={isUser ? <CitasUsers /> : <CitasBarbero />}
              />
              <Route element={<PrivateRouteUser />}>
                <Route path="/barberos" element={<Barberos />} />
              </Route>
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route element={<HomeSesion />}>
              <Route path="/login" element={<Login />} />
              <Route path="/loginAdmin" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
