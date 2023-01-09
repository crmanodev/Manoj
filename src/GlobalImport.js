import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import Login from "./common/login";
import TopNavBar from "./components/navbar";
import Dashboard from "./common/dashboard";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function GlobalImport() {
  // console.log(user, auth);

  // const Layout = useCallback(() => {
  const Layout = () => {
    return (
      <>
        <TopNavBar />
       
      </>
    );
  };

  // const userDetails = (e) => {

  //   let isAuthorized = "";
  //   if (user !== null && user !== undefined) {
  //     isAuthorized = localStorage.getItem("isAuthorized").toString();
  //     setUser(JSON.parse(user));
  //   }

  //   setAuth(isAuthorized == "true" && user ? true : false);
  // };

  return (
    <div className="GlobalImport">
      <BrowserRouter>
        <div
        // className={
        //   auth ? `main-content ${inactive ? "inactive" : ""}` : "login-page"
        // }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default GlobalImport;
