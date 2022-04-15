import { ReactComponent as CookingSvg } from "./assets/images/Cooking.svg";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-evenly bg-green-200 md:bg-white w-[98%] rounded-[15px] py-5">
      <div className=" flex flex-col justify-center w-[80%] md:w-[40%] mx-auto md:mx-0 py-5 ">
        <h1 className=" uppercase text-2xl md:text-4xl lg:text-6xl md:my-2">
          a taste of home
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl md:my-2 leading-6">
          Your go to meal planner to have healthy balance of diet and taste.
        </p>
        <button className="w-[50%] max-w-[10rem] my-2 md:w-[50%] text-xl text-xl p-2 rounded-md bg-green-600 text-white">
          View menu
        </button>
      </div>
      <CookingSvg className="w-[85%] md:w-[40%] lg:w-[35%] xl:w-[25%]  h-[20vh] md:h-[35vh] lg:h-[50vh] py-2  " />
    </div>
  );
}
