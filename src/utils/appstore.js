import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import movieReducer from "./Slices/movieSlice";
import gptReducer from "./Slices/gptSlice";
import languageReducer from "./Slices/LanguageSlice";
import suggestionsSlice from "./Slices/suggestionsSlice";

const appStore = configureStore({
  reducer: {
    userDetails: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    language: languageReducer,
    suggestions: suggestionsSlice,
  },
});

export default appStore;
