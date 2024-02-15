import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpt: false,
  },

  reducers: {
    toggleGpt: (state, action) => {
      state.gpt = !state.gpt;
    },
  },
});

export const { toggleGpt } = gptSlice.actions;

export default gptSlice.reducer;
