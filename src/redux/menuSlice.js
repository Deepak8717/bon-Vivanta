import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menuType: "mealType",
  activeMenuByMenuTypes: "breakfast",
  searchQry: "",
  isMainMenuOpen: true,
  activeRecipe: null,
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
    activeRecipeHandler: (state, actions) => {
      state.activeRecipe = actions.payload;
    },
    searchQryHandler: (state, actions) => {
      state.searchQry = actions.payload;
    },
  },
});

export const {
  mainMenuHandler,
  menuTypeHandler,
  activeMenuByMenuTypesHandler,
  activeRecipeHandler,
  searchQryHandler,
} = menuSlice.actions;
export default menuSlice.reducer;
