import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  errMsg: "",
  data: [],
  sortBy: "gender",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, action) => state,
    loadingUsers: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
      state.errMsg = "";
    },
    loadUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.errMsg = "";
      state.data = action.payload;
    },
    loadUsersFailed: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.errMsg = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  loadUsers,
  loadingUsers,
  loadUsersSuccess,
  loadUsersFailed,
  setSortBy,
} = usersSlice.actions;

export default usersSlice.reducer;
