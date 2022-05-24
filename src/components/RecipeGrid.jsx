import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const RecipeGrid = ({ recipeData }) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [recipeDisplayCount, setRecipeDisplayCount] = useState(6);
  const loadMoreHandle = () => {
    setRecipeDisplayCount(recipeDisplayCount + 6);
  };
  return (
    <div className="mx-auto">
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {recipeData.slice(0, recipeDisplayCount).map((recipeItem) => {
          return (
            <div className="mx-auto w-88 recipe-card-shaodw rounded-2xl cursor-pointer ">
              <img
                src={recipeItem.recipe.image}
                alt={recipeItem.recipe.label}
                className="w-72 h-56 rounded-t-2xl "
              />
              <div className=" p-2 w-72">
                <div className="flex h-8 mb-2">
                  <h1 className="w-[70%] h-8 text-xl overflow-hidden">
                    {recipeItem.recipe.label}
                  </h1>
                  <div
                    className={`border h-8 p-1 mx-2 leading-4 rounded-lg text-white  capitalize ${
                      recipeItem.recipe.mealType == "breakfast"
                        ? "bg-green-600"
                        : recipeItem.recipe.mealType == "lunch/dinner"
                        ? "bg-orange-500"
                        : recipeItem.recipe.mealType == "snack"
                        ? "bg-yellow-300 text-black"
                        : recipeItem.recipe.mealType == "teatime"
                        ? "bg-amber-500"
                        : ""
                    }`}
                  >
                    {recipeItem.recipe.mealType}
                  </div>
                </div>
                <div className="flex h-8">
                  <h1 className="capitalize text-slate-500 text-xl w-[70%]">
                    {recipeItem.recipe.cuisineType}
                  </h1>
                  <h1 className="mx-3 text-slate-500">
                    KCAL&nbsp;
                    <span>
                      {recipeItem.recipe.calories.toString().split(".")[0]}
                    </span>
                  </h1>
                </div>
                <div className="flex  flex-wrap w-full h-12 overflow-hidden border-t-[3px]">
                  {recipeItem.recipe.healthLabels.map((label, index) => {
                    return (
                      <div key={index} className="mx-2 text-slate-500">
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          className={`w-32 h-8 m-8 bg-green-100 rounded ${
            recipeDisplayCount >= 20 ? "hidden" : ""
          }`}
          onClick={loadMoreHandle}
        >
          Load More ...
        </button>
        <button
          className={`w-32 h-8 m-8 ${recipeDisplayCount < 20 ? "hidden" : ""}`}
          onClick={loadMoreHandle}
        >
          <BsFillArrowUpCircleFill className="mx-auto text-3xl text-green-600" />
          Back to the Top
        </button>
      </div>
    </div>
  );
};

export default RecipeGrid;
