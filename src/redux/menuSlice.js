import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menuType: "mealType",
  activeMenuByMenuTypes: "breakfast",
  isMainMenuOpen: true,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    mainMenuHandler: (state) => {
      state.isMainMenuOpen = !state.isMainMenuOpen;
    },
  },
});

export const { mainMenuHandler } = menuSlice.actions;
export default menuSlice.reducer;
