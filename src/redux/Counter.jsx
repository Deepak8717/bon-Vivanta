import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { mainMenuHandler } from "./menuSlice";

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(mainMenuHandler())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
