import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0,
  pagename: ["Dashboard", "ProcessLoan", "Reports", "Audit", "Retrigger"],
};
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    selecValue: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { selecValue } = sidebarSlice.actions;

export default sidebarSlice.reducer;
