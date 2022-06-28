import { ReactComponent as CookingSvg } from "../assets/images/Cooking.svg";
import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-between items-center  h-[50vh] rounded-[15px] py-5  ">
      <div className=" flex flex-col justify-center w-[95%] md:w-[40%] mx-auto md:mx-0 py-5 ">
        <h1 className=" uppercase text-2xl md:text-4xl lg:text-6xl md:my-2">
          a taste of home
        </h1>
        <p className="text-lg md:text-lg lg:text-xl md:my-2 leading-6 text-slate-500">
          Your go to ideas of recipes with healthy balance of taste and
          Nutrition from around the world.
        </p>
        <Link
          to="/menu"
          className="w-[50%] max-w-[10rem] my-2 md:w-[50%] text-xl text-xl p-2 rounded-md bg-green-600 text-white text-center"
        >
          View Menu
        </Link>
      </div>
      <CookingSvg className="w-[95%] md:w-[40%] lg:w-[35%] xl:w-[25%]  h-[25vh] md:h-[35vh]  py-2 translate-x-[-10%] md:translate-x-0 " />
    </div>
  );
}
