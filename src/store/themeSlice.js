import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: localStorage.theme || "light",
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.value = payload;
      localStorage.theme = payload; // Save the theme to local storage
    },
    getTheme: (state) => {
      state.value = localStorage.theme || "light"; // Get the theme from local storage
    },
  },
});

export const { setTheme, getTheme } = themeSlice.actions;

export default themeSlice.reducer;
