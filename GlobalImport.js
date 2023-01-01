import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import "./modules/calender.css";
import "./modules/Style.scss";

import Sidebar from "./modules/SideNav/Sidebar";

import Login from "./modules/Login";
import TopNavBar from "./src/components/navbar";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function GlobalImport() {
  const [inactive, setInactive] = useState(false);
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const changeState = () => {
    setAuth(!auth);
  };

  const changeCss = (value) => {
    setInactive(value);
  };
  // console.log(user, auth);

  // const Layout = useCallback(() => {
  const Layout = () => {
    return (
      <>
        {/* <Sidebar changeCss={changeCss} isOpen={inactive}/> */}
        <Sidebar isOpen={inactive} changeCss={changeCss} />
        <TopNavBar changeState={changeState} />
        <Outlet />
      </>
    );
  };

  const userDetails = (e) => {
    let user = localStorage.getItem("user_info");

    let isAuthorized = "";
    if (user !== null && user !== undefined) {
      isAuthorized = localStorage.getItem("isAuthorized").toString();
      setUser(JSON.parse(user));
    }

    setAuth(isAuthorized == "true" && user ? true : false);
  };

  useEffect(() => {
    // setTimeout(async () => {
    userDetails();
    // },);
  }, []);

  return (
    <div className="GlobalImport">
      <BrowserRouter>
        <div
          className={
            auth ? `main-content ${inactive ? "inactive" : ""}` : "login-page"
          }
        >
          <Routes>
            <Route
              path="/"
              element={<Navigate to={auth ? "/dashboard" : "/login"} />}
            />
            <Route
              path="/login"
              element={
                auth ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login changeState={changeState} />
                )
              }
            />

            <Route element={<Layout />}>
              {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/editbom/:id" element={<Editbom />} />
              <Route path="/bomdetails" element={<BOMDetails />} />
              <Route
                path="/process_step/details/:id"
                element={<ProcessDetails />}
              /> */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default GlobalImport;
