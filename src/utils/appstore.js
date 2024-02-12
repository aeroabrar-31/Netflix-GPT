import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    userDetails: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
