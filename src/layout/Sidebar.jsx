import React, { useState } from "react";
import { GiMeal } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { BiDish } from "react-icons/bi";
// import { icons } from "react-icons/lib";

const Sidebar = ({ activeMenu }) => {
  const sideMenu = {
    mealType: ["breakfast", "Lunch", "Snack", "teatime"],
    cuisineType: [
      "merican",
      "asian",
      "british",
      "caribbean",
      "central europe",
      "chinese",
      "eastern europe",
      "french",
    ],
    dishType: ["side dish", "soup", "starter", "sweets"],
  };
  return (
    <div className="w-72  h-[70vh]  lg:ml-4 xl:ml-8 px-4  menu-scrollbar mx-2 hidden lg:block ">
      {Object.entries(sideMenu).map((menuItem) => {
        const [key, value] = menuItem;
        return (
          <>
            <div className="flex bg-green-600 p-1 rounded  mx-auto my-2">
              {key === "mealType" ? (
                <GiMeal className="text-2xl text-white mx-2 h-8" />
              ) : key === "cuisineType" ? (
                <SiCodechef className="text-2xl text-white mx-2 h-8" />
              ) : (
                <BiDish className="text-2xl text-white mx-2 h-8" />
              )}
              <div className="flex leading-8 text-white text-lg capitalize">
                {key.toLowerCase()}
              </div>
            </div>

            {value.map((subMenu) => {
              return (
                <div className="flex  p-1 rounded shadow-md mx-auto px-5 cursor-pointer">
                  <div
                    className="flex leading-8  text-lg capitalize"
                    onClick={() => activeMenu(subMenu)}
                  >
                    {subMenu.toLowerCase()}
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
