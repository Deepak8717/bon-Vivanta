import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const RecipeDetails = () => {
  const { activeRecipe } = useSelector((state) => state.menu);
  console.log(activeRecipe.mealType);
  const [desktop, setDesktop] = useState(true);
  const updateMedia = () => {
    window.innerWidth < 1024 ? setDesktop(false) : setDesktop(true);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="w-full overflow-none">
        {/* if it's not desktop screen sidebar disapear and navbar apear */}
        {!desktop && <Navbar />}
        <div className="lg:ml-60">
          <div className="w-full md:w-[80%] my-12  mx-auto flex">
            <div>
              <img src={activeRecipe.image} className="rounded-lg w-96 h-96" />
            </div>
            <div className="mx-8  w-[50%]">
              <h1 className="text-4xl font-medium">{activeRecipe.label}</h1>
              <div className="flex my-4 text-slate-500">
                <div className="flex flex-col items-center w-28  border-x-2">
                  <div className="text-2xl">{activeRecipe.totalTime}</div>
                  <div className="text-sm">Min</div>
                </div>
                <div className="flex flex-col items-center w-28 mx-1  border-x-2">
                  <div className="text-3xl">
                    {activeRecipe.ingredientLines.length}
                  </div>
                  <div className="text-sm">Ingredients</div>
                </div>
                <div className="flex flex-col items-center w-28  mx-1  border-x-2">
                  <div className="text-2xl">
                    {activeRecipe.calories.toFixed(2)}
                  </div>
                  <div className="text-sm">Calories</div>
                </div>
              </div>
              <div className="w-fit flex text-xl bg-slate-200  px-2 p-1">
                <div className={`capitalize p-1  rounded-lg `}>
                  {activeRecipe.cuisineType}
                </div>
                <span className="text-2xl">/</span>
                <div className="capitalize p-1  rounded-lg ">
                  {activeRecipe.mealType}
                </div>
                <span className="text-2xl">/</span>
                <div className="capitalize p-1  rounded-lg ">
                  {activeRecipe.dishType}
                </div>
              </div>
              <div className="border-t-2 my-2">
                <div className="flex justify-between w-[90%] my-2">
                  <h1 className=" capitalize text-2xl">Ingredients</h1>
                  <div className="capitalize font-bold">
                    {activeRecipe.yield} Servings
                  </div>
                </div>
                <ul className="mx-4 list-disc">
                  {activeRecipe.ingredientLines.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <div className="w-fit mx-4 capitalize p-1 px-2 font-bold cursor-pointer rounded-full bg-green-600 text-white text-xl">
                  <a href={activeRecipe.url} target="_blank">
                    Get Instructions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
