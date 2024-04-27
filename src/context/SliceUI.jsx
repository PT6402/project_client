/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const SliceUI = createSlice({
  name: "sliceUI",
  initialState: {
    miniSidenav: false,
  },
  reducers: {
    setMiniSidenav: (state, action) => {
      state.miniSidenav = action.payload;
    },
  },
});
export const { setMiniSidenav } = SliceUI.actions;
export default SliceUI.reducer;
