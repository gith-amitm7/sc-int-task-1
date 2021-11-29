import React from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as VideoIcon } from "assets/images/vector.svg";
import { ReactComponent as PlaylistIcon } from "assets/images/playlist.svg";
import { ReactComponent as ProfileIcon } from "assets/images/profile.svg";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  return (
    <div id="sidebar">
      <div id="wrapper">
        <Logo id="app-logo" />
        {isAuthenticated ? (
          <>
            <Link
              className={clsx(
                "icon-wrapper",
                location.pathname === "/video" ? "active" : ""
              )}
              to={{ pathname: "/video" }}
            >
              <VideoIcon />
            </Link>
            <Link
              className={clsx(
                "icon-wrapper",
                location.pathname === "/playlist" ? "active" : ""
              )}
              to={{ pathname: "/playlist" }}
            >
              <PlaylistIcon />
            </Link>
            <div id="profile-wrapper">
              <Link className="icon-wrapper" to={{ pathname: "/profile" }}>
                <ProfileIcon />
              </Link>
            </div>
          </>
        ) : null}
      </div>
      <div className="v-seperator"></div>
    </div>
  );
};

export default React.memo(Sidebar);
