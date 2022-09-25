import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import menuReducer from "./menuSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
