import { configureStore } from "@reduxjs/toolkit";
import  isManuOpen  from "../features/UiSlice";
const store = configureStore({
  reducer: {
    isManuOpen:isManuOpen,
  },
});
export default store;
