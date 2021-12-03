import { createLogic } from "redux-logic";
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailed,
  loadingUsers,
} from "store/slices/users/reducer";
import { users } from "config/apiEndpoints";

const loadUsersLogic = createLogic({
  type: loadUsers.type,
  latest: true,
  process({ getState, action }, dispatch, done) {
    console.log("Called");

    dispatch(loadingUsers());

    fetch(users)
      .then((res) => {
        res
          .json()
          .then((resData) => {
            console.log("Users res::", resData);
            dispatch(loadUsersSuccess(resData.results));
          })
          .catch((err) => {
            dispatch(
              loadUsersFailed(
                "An internal error occured while reading the response"
              )
            );
          })
          .finally(() => {
            done();
          });
      })
      .catch((err) => {
        dispatch(loadUsersFailed("An error occured"));
        done();
      });
  },
});

const usersLogic = [loadUsersLogic];

export default usersLogic;
