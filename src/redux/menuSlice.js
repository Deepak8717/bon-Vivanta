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
    menuTypeHandler: (state, actions) => {
      state.menuType = actions.payload;
    },
    activeMenuByMenuTypesHandler: (state, actions) => {
      state.activeMenuByMenuTypes = actions.payload;
    },
  },
});

export const {
  mainMenuHandler,
  menuTypeHandler,
  activeMenuByMenuTypesHandler,
} = menuSlice.actions;
export default menuSlice.reducer;
