import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("increment");
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
