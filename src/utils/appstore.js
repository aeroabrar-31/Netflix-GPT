import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./LanguageSlice";
import suggestionsSlice from "./suggestionsSlice";

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
