import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    movieNames: null,
    movies: null,
  },

  reducers: {
    addMovieNames: (state, action) => {
      state.movieNames = action.payload;
    },

    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies, addMovieNames } = suggestionSlice.actions;

export default suggestionSlice.reducer;
