import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import rootLogic from "./root-logic";
import { createLogicMiddleware } from "redux-logic";

const logicMiddleware = createLogicMiddleware(rootLogic, {});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logicMiddleware],
});

export default store;
