import { createLogic } from "redux-logic";
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailed,
  loadingUsers,
} from "store/slices/auth/reducer";
import { users } from "config/apiEndpoints";

const loadUsersLogic = createLogic({
  type: loadUsers.type,
  latest: true,
  process({ getState, action }, dispatch, done) {
    console.log("Called");

    dispatch(loadingUsers());

    fetch(users)
      .then((res) => {
        console.log("Users res::", res);
      })
      .catch((err) => {
        console.log("Users res err::", err);
        dispatch(loadUsersFailed("An error occured"));
      })
      .finally(() => {
        done();
      });
  },
});

const usersLogic = [loadUsersLogic];

export default usersLogic;
