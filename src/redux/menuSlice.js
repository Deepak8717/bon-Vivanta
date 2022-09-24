import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: [
    {
      menuType: "mealType",
      activeMenuByMenuTypes: "breakfast",
      isMainMenuOpen: true,
    },
  ],
  reducers: {
    mainMenuHandler: (state, actions) => {
      console.log("toggle main menu");
    },
    menuTypeHandler: (state, actions) => {
      console.log("set child menu");
    },
    activeMenuByMenuTypesHandler: (state, actions) => {
      console.log("set grandchildmenu");
    },
  },
});

export const {
  mainMenuHandler,
  menuTypeHandler,
  activeMenuByMenuTypesHandler,
} = menuSlice.actions;

export default menuSlice.reducer;
