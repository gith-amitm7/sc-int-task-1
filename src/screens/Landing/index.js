import React, { useEffect } from "react";
import UserCard from "components/UserCard";
import { loadUsers, setSortBy } from "store/slices/users/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSortedUsers,
  selectUsers,
  selectSortByValue,
} from "store/slices/users/selectors";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./landing.scss";

const Landing = () => {
  const { isLoading, hasError, errMsg } = useSelector(selectUsers);
  const users = useSelector(selectSortedUsers);
  const sortBy = useSelector(selectSortByValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div id="landing">
      <div className="header-wrapper">
        <div className="title typ-page-title">
          Users
          <div className="count-indicator typ-page-title-info">
            {users.length > 0 ? `${users.length} results are found` : null}
          </div>
        </div>
        <div className="sorter">
          <FormControl fullWidth>
            <InputLabel id="select-label">Sort By</InputLabel>
            <Select
              size="small"
              labelId="select-label"
              id="sorter-menu"
              value={sortBy}
              label="Sort By"
              onChange={handleSortChange}
            >
              <MenuItem value={"gender"}>Gender</MenuItem>
              <MenuItem value={""}>None</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {isLoading ? (
        "Loading..."
      ) : hasError ? (
        errMsg
      ) : users.length === 0 ? (
        "No data"
      ) : (
        <div className="user-card-wrapper">
          {users.map((user, index) => (
            <UserCard key={`user-${index}`} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landing;
