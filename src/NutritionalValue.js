import React from "react";
import NutritionalValueImage from "../src/assets/images/Nutritional-value.png";

export default function NutritionalValue() {
  return (
    <div className="md:w-[50%] my-12 lg:my-24 mx-auto  ">
      <h1 className="text-2xl md:text-3xl capitalize text-center">
        Get Nutritional info
      </h1>
      <div className="flex flex-col md:flex-row items-center  my-4 ">
        <div className="lg:ml-8 w-full">
          <img
            src={NutritionalValueImage}
            className="mx-auto max-w-[200px] lg:max-w-[300px] "
          />
        </div>

        <div className=" mx-4 w-full ">
          <div>
            <h className="text-slate-500 lg:text-xl">Portion</h>
            <p className="text-xl lg:text-2xl">455 kcal</p>
          </div>
          <div>
            <h className="text-slate-500 lg:text-xl">Carbs</h>
            <p className="text-xl lg:text-2xl">64.5 g</p>
          </div>
          <div>
            <h className="text-slate-500 lg:text-xl">Protin</h>
            <p className="text-xl lg:text-2xl">8 g</p>
          </div>
          <div>
            <h className="text-slate-500 lg:text-xl">Fat</h>
            <p className="text-xl lg:text-2xl">16 g</p>
          </div>
        </div>
      </div>
    </div>
  );
}
