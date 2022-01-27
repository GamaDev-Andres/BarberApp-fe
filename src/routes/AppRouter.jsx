import React, { Suspense, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Spinner from "../components/Spinner/Spinner";
import contextAuth from "../contexts/contextAuth/ContextAuth";
import PrivateRouteUser from "./PrivateRouteUser";

const CitasUsers = React.lazy(() =>
  import("../components/CitasUsers/CitasUsers")
);
const PageNotFound = React.lazy(() =>
  import("../components/pageNotFound/PageNotFound")
);

const HomePresentation = React.lazy(() =>
  import("../components/HomePresentation/HomePresentation")
);
const Barberos = React.lazy(() => import("../components/Barberos/Barberos"));
const ProfileBarbero = React.lazy(() =>
  import("../components/ProfileBarbero/ProfileBarbero")
);
const NewCita = React.lazy(() => import("../components/CitasUsers/NewCita"));

const Home = React.lazy(() => import("../components/Home/Home"));

const HomeSesion = React.lazy(() =>
  import("../components/HomeSesion/HomeSesion")
);
const Login = React.lazy(() => import("../components/Login/Login"));
const Register = React.lazy(() => import("../components/Register/Register"));

const AppRouter = () => {
  const { token } = useContext(contextAuth);

  if (token === null) {
    return <Spinner />;
  }

  return (
    <HashRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />}>
              <Route index element={<HomePresentation />} />
              <Route path="/barberos/:id" element={<ProfileBarbero />} />
              <Route path="/citas" element={<CitasUsers />} />
              <Route element={<PrivateRouteUser />}>
                <Route path="/barberos" element={<Barberos />} />
                <Route path="/newcita" element={<NewCita />} />
                <Route path="/newcita/:id" element={<NewCita />} />
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
    </HashRouter>
  );
};

export default AppRouter;
