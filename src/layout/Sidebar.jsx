import { Link, useOutletContext } from "react-router-dom";
import { AiTwotoneHome, AiFillPhone } from "react-icons/ai";
import {
  MdRestaurantMenu,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import MenuTypes from "../components/sidebar/MenuTypes";
import SubMenuByMenuType from "../components/sidebar/SubMenuByMenuTypes";
import { useState } from "react";

const Sidebar = () => {
  const { menuType, isMainMenuOpen, mainMenuHandler } = useOutletContext();
  const sidebarMenu = {
    mealType: ["breakfast", "brunch", "lunch/dinner", "snack", "teatime"],
    cuisineType: [
      "american",
      "asian",
      "british",
      "caribbean",
      "central europe",
      "chinese",
      "eastern europe",
      "french",
      "greek",
      "indian",
      "italian",
      "japanese",
      "korean",
      "kosher",
      "mediterranean",
      "mexican",
      "middle eastern",
      "nordic",
      "south american",
      "south east asian",
      "world",
    ],
    dishType: [
      "alcohol cocktail",
      "biscuits and cookies",
      "bread",
      "cereals",
      "condiments and sauces",
      "desserts",
      "drinks",
      "egg",
      "ice cream and custard",
      "main course",
      "pancake",
      "pasta",
      "pastry",
      "pies and tarts",
      "pizza",
      "preps",
      "preserve",
      "salad",
      "sandwiches",
      "seafood",
      "side dish",
      "soup",
      "special occasions",
      "starter",
      "sweets",
    ],
  };

  const subMenuByMenuType = sidebarMenu[menuType];
  return (
    <div className="w-60 fixed inset-y-0  hidden lg:block shadow-2xl ">
      <div className=" h-16">{/*Empty space*/}</div>
      <div className="flex font-Babylonica text-5xl font-bold text-slate-800 justify-center mb-8">
        <Link to="/" className=" w-[80%]">
          <div className="inline ">bon</div>
          <div className="inline text-green-600  my-4">Vivanta</div>
        </Link>
      </div>
      <div className="w-[90%] mx-auto h-60 ">
        <Link to="/" className="text-2xl my-2">
          <div className="flex items-center hover:bg-green-600 hover:text-white p-2 rounded-lg">
            <AiTwotoneHome className="text-xl mx-2" /> Home
          </div>
        </Link>
        <div className="my-2">
          <Link to="/menu" className="text-2xl " onClick={mainMenuHandler}>
            <div
              className={`flex items-center hover:bg-green-600 hover:text-white p-2 bg-green-600 text-white ${
                isMainMenuOpen ? "rounded-t-md" : "rounded-md"
              }`}
            >
              <MdRestaurantMenu className="text-xl mx-2" />
              <div className="w-full  flex justify-between items-center">
                <div>Menu</div>
                <div>
                  {isMainMenuOpen ? (
                    <MdKeyboardArrowUp className="text-3xl" />
                  ) : (
                    <MdKeyboardArrowDown className="text-3xl" />
                  )}
                </div>
              </div>
            </div>
          </Link>
          <div className={`border ${isMainMenuOpen ? "block" : "hidden"}`}>
            {menuType === "" ? (
              <MenuTypes sidebarMenu={sidebarMenu} />
            ) : (
              <SubMenuByMenuType subMenuByMenuType={subMenuByMenuType} />
            )}
          </div>
        </div>

        <Link to="/contact" className="text-2xl my-2">
          <div className="flex items-center hover:bg-green-600 hover:text-white p-2 rounded-lg">
            <AiFillPhone className="text-xl mx-2" />
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
