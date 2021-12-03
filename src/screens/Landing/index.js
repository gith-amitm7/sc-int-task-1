import React from "react";
import UserCard from "components/UserCard";
import { loadUsers, setSortBy } from "store/slices/users/operations";
import { useDispatch } from "react-redux";

import "./landing.scss";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return <div id="landing"></div>;
};

export default Landing;
