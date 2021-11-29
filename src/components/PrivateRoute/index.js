import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
  const location = useLocation();
  console.log(location.pathname);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    location.pathname === "/login" ? (
      <Navigate push to={{ pathname: "/video" }} />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate push to={{ pathname: "/login" }} />
  );
}

export default PrivateRoute;
