import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    movies: null,
  },

  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = suggestionSlice.actions;

export default suggestionSlice.reducer;
