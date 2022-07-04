import React from "react";

const RecipeCard = ({ recipeItem }) => {
  return (
    <div className="mx-auto  recipe-card-shaodw rounded-2xl cursor-pointer border shadow-lg">
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
              recipeItem.recipe.mealType[0] === "breakfast"
                ? "bg-green-600"
                : recipeItem.recipe.mealType[0] === "brunch"
                ? "bg-lime-200 text-black"
                : recipeItem.recipe.mealType[0] === "lunch/dinner"
                ? "bg-orange-500"
                : recipeItem.recipe.mealType[0] === "snack"
                ? "bg-yellow-200 text-black"
                : recipeItem.recipe.mealType[0] === "teatime"
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
            <span>{recipeItem.recipe.calories.toString().split(".")[0]}</span>
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
};

export default RecipeCard;
