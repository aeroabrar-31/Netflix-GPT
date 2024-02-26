import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpt: false,
    trailerId: null,
  },

  reducers: {
    toggleGpt: (state, action) => {
      state.gpt = !state.gpt;
    },

    addTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { toggleGpt, addTrailerId } = gptSlice.actions;

export default gptSlice.reducer;
