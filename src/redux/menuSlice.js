import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menuType: "mealType",
  activeMenuByMenuTypes: "breakfast",
  searchQry: "",
  isMainMenuOpen: true,
  activeRecipe: null,
  hamMenu: false,
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
    toggleHamMenu: (state) => {
      state.hamMenu = !state.hamMenu;
    },
  },
});

export const {
  mainMenuHandler,
  menuTypeHandler,
  activeMenuByMenuTypesHandler,
  activeRecipeHandler,
  searchQryHandler,
  toggleHamMenu,
} = menuSlice.actions;
export default menuSlice.reducer;
