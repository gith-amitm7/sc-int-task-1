import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users;
const selectUsersData = (state) => state.users.data;
export const selectSortByValue = (state) => state.users.sortBy;

//handling sort in selector instead of component
export const selectSortedUsers = createSelector(
  selectUsersData,
  selectSortByValue,
  (users, sortBy) => {
    if (!sortBy) return users;

    return [...users].sort((a, b) => {
      let val1 = a[sortBy];
      let val2 = b[sortBy];
      if (val1 < val2) {
        return -1;
      }
      if (val1 > val2) {
        return 1;
      }
      return 0;
    });
  }
);
