import React from "react";
import NutritionalValueImage from "../assets/images/Nutritional-value.png";

export default function NutritionalValue() {
  return (
    <div className="md:w-[50%] my-12 lg:my-24 mx-auto  ">
      <h1 className="text-2xl md:text-3xl capitalize text-center">
        Track your Nutrition
      </h1>
      <div className="flex flex-col md:flex-row items-center  my-4 ">
        <div className="lg:ml-8 w-full">
          <img
            src={NutritionalValueImage}
            className="mx-auto max-w-[200px] lg:max-w-[300px] "
          />
        </div>

        <div className="flex  justify-center md:block mx-4 w-full ">
          <div className="mx-2">
            <h4 className="text-slate-500 lg:text-xl ">Portion</h4>
            <p className="text-xl lg:text-2xl">455 kcal</p>
          </div>
          <div className="mx-2">
            <h4 className="text-slate-500 lg:text-xl">Carbs</h4>
            <p className="text-xl lg:text-2xl">64.5 g</p>
          </div>
          <div className="mx-2">
            <h4 className="text-slate-500 lg:text-xl">Protin</h4>
            <p className="text-xl lg:text-2xl">8 g</p>
          </div>
          <div className="mx-2">
            <h4 className="text-slate-500 lg:text-xl">Fat</h4>
            <p className="text-xl lg:text-2xl">16 g</p>
          </div>
        </div>
      </div>
    </div>
  );
}
