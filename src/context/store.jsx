import { configureStore } from "@reduxjs/toolkit";
import SliceUI from "./SliceUI";

const store = configureStore({
  reducer: SliceUI,
});

export default store;
