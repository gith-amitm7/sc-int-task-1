import { combineReducers } from "redux";
import usersReducer from "./slices/users/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
