import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cat: [],
  isLoading: false,
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatfetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cat = action.payload;
      state.isLoading = false;
    },
    getCatsFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCatfetch, getCatsSuccess, getCatsFailed } = catSlice.actions;
export default catSlice.reducer;

