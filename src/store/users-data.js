// importing from @reduxjs/toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

//Creating a Slice for storing users Details
const usersDetails = createSlice({
  name: "usersDetails",
  initialState: {
    userDetailsArray: [],
    singleUser: null,
  },
  reducers: {
    replaceUserDetails(state, action) {
      state.userDetailsArray = [...action.payload];
    },
    replaceSingleUser(state, action) {
      state.singleUser = { ...action.payload };
    },
  },
});
const store = configureStore({
  reducer: { usersDetails: usersDetails.reducer },
});

// creating a dispatch function to handle async call and then update the users Array

//export actions
export const stateActions = usersDetails.actions;

//exporting the store to provide from index.js
export default store;
