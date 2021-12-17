import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../components/Home/Home";
// import HomeSesion from "../components/HomeSesion/HomeSesion";
// import Login from "../components/Login/Login";
// import Register from "../components/Register/Register";
const Home = React.lazy(() => import("../components/Home/Home"));
const HomeSesion = React.lazy(() =>
  import("../components/HomeSesion/HomeSesion")
);
const Login = React.lazy(() => import("../components/Login/Login"));
const Register = React.lazy(() => import("../components/Register/Register"));
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageNotFound from "../components/pageNotFound/PageNotFound";
import Spinner from "../components/Spinner/Spinner";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
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
