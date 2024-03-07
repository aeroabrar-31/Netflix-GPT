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

    removeMovieNames: (state) => {
      state.movieNames = null;
    },
    removeMovies: (state) => {
      state.movies = null;
    },
  },
});

export const { addMovies, addMovieNames, removeMovieNames, removeMovies } =
  suggestionSlice.actions;

export default suggestionSlice.reducer;
