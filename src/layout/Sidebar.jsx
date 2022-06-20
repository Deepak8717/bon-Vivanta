import React from "react";
import { GiMeal } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { BiDish } from "react-icons/bi";
import { Link, useOutletContext } from "react-router-dom";

const Sidebar = (props) => {
  const { activeMenu, activeMenuHandler } = props;
  const { sideMenu } = useOutletContext();
  return (
    <div className="w-72 lg:ml-4 xl:ml-8 px-4  menu-scrollbar mx-2 hidden lg:block ">
      {Object.entries(sideMenu).map((menuItem, index) => {
        const [key, value] = menuItem;
        return (
          //render the Category along with corresponding icon
          <div key={index}>
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

            {value.map((subMenu, index) => {
              return (
                //render subCategory respect to main category
                <Link to={`/menu/${subMenu}`} key={index}>
                  <div
                    className={`flex  p-1 rounded shadow-md mx-auto px-5 cursor-pointer active:shadow-none hover:bg-green-100 ${
                      activeMenu === subMenu ? "bg-green-200" : ""
                    }`}
                    onClick={() => activeMenuHandler(subMenu)}
                  >
                    <div className="flex leading-8  text-lg capitalize">
                      {subMenu}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
