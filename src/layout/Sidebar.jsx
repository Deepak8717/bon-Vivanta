import React, { useState } from "react";
import { GiMeal } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { BiDish } from "react-icons/bi";

const Sidebar = ({ activeMenu }) => {
  return (
    <div className="w-72  h-[70vh]  lg:ml-4 xl:ml-8 px-4  menu-scrollbar mx-2 hidden lg:block ">
      {/* MealType */}
      <div className="flex bg-green-600 p-1 rounded  mx-auto my-2">
        <div className="mx-2">
          <GiMeal className="text-3xl text-white " />
        </div>
        <div className="flex leading-8 text-white text-xl ">Meal Type</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto px-5 cursor-pointer">
        <div
          className="flex leading-8  text-xl"
          onClick={() => activeMenu("breakfast")}
        >
          Breakfast
        </div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto px-5 cursor-pointer">
        <div
          className="flex leading-8  text-xl"
          onClick={() => activeMenu("Lunch")}
        >
          Lunch/Dinner
        </div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto px-5 cursor-pointer">
        <div
          className="flex leading-8  text-xl"
          onClick={() => activeMenu("Snack")}
        >
          Snack
        </div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto px-5 cursor-pointer">
        <div className="flex leading-8  text-xl">Tea Time</div>
      </div>

      {/* CusineType */}
      <div className="flex bg-green-600 p-1 rounded  mx-auto my-2 ">
        <div className="mx-2">
          <SiCodechef className="text-3xl text-white " />
        </div>
        <div className="flex leading-8 text-white text-xl">Cuisine Type</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">American</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Asian</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">British</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Caribbean</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Central Europe</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Chinese</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Eastern Europe</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">French</div>
      </div>

      {/* dishtype */}
      <div className="flex bg-green-600 p-1 rounded  mx-auto my-2 ">
        <div className="mx-2">
          <BiDish className="text-3xl text-white " />
        </div>
        <div className="flex leading-8 text-white text-xl">Dish Type</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Side Dish</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Soup</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Starter</div>
      </div>
      <div className="flex  p-1 rounded shadow-md mx-auto cursor-pointer">
        <div className="flex leading-8  text-xl px-5">Sweets</div>
      </div>
    </div>
  );
};

export default Sidebar;
