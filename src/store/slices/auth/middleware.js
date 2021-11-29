import { createLogic } from "redux-logic";
import { login, loggingIn, loggedIn } from "store/slices/auth/reducer";

/**
 * Middleware logic to intercept all(or latest) login action dispatch event.
 * Such middlewares ensures none of API calls or business logic is written into
 * components/action creators. It gives a better control over transient actions like loading and also
 * governs handling of success/failure scenarios more reliably
 **/
const loginLogic = createLogic({
  type: login.type,
  latest: true,
  process({ getState, action }, dispatch, done) {
    console.log("Called");
    // Dispatching transient action
    dispatch(loggingIn());

    // Lets wait for one sec!
    setTimeout(() => {
      //Didn't handle failure scenarios, but they can be controlled over from here
      dispatch(loggedIn());
      //done() marks ending of process lifecycle
      done();
    }, 1000);
  },
});

const authLogic = [loginLogic];

export default authLogic;
