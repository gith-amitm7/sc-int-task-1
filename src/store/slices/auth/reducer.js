import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => state,
    loggingIn: (state, action) => {
      state.isAuthenticating = true;
    },
    loggedIn: (state, action) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
    },
  },
});

export const { login, loggingIn, loggedIn } = authSlice.actions;
export default authSlice.reducer;
