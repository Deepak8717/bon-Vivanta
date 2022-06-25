import React from "react";
import { useContext } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { recipeContext } from "../App";

const HamburgerMenu = () => {
  const { toggleHam, sideMenu } = useContext(recipeContext);
  return (
    <div className="fixed inset-0  z-10  w-full ">
      <div className="bg-white w-[70%] max-w-[300px] h-full p-4">
        <div className="w-full h-12 flex justify-end ">
          <button
            className="bg-green-200 hover:bg-green-300 h-8 w-8 m-2 text-xl font-bold"
            onClick={toggleHam}
          >
            X
          </button>
        </div>
        <div>
          <div className="flex items-end hover:bg-green-100">
            <AiTwotoneHome className="text-3xl inline m-2 " />
            <Link to="/" className="inline m-2 text-xl ">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
