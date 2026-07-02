import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
export const isManuOpen = createSlice({
  name: "manu",
  initialState,
  reducers: {
    openManu: (state) => {
      state.isOpen = true;
    },
    closeManu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openManu, closeManu } = isManuOpen.actions;

export default isManuOpen.reducer;
