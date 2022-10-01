import React from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { activeRecipeHandler } from "../../redux/menuSlice";
const RecipeCard = ({ recipeItem, loading }) => {
  const { menuType, activeMenuByMenuTypes } = useSelector(
    (state) => state.menu
  );
  const dispatch = useDispatch();
  const recipeId = recipeItem.recipe.uri.substring(
    recipeItem.recipe.uri.indexOf("#") + 1
  );
  return (
    <Link
      to={`/menu/${activeMenuByMenuTypes.replace(
        /[^a-zA-Z0-9]/g,
        "_"
      )}/${recipeItem.recipe.label.replace(/[^a-zA-Z0-9]/g, "_")}/${recipeId}`}
      onClick={() => dispatch(activeRecipeHandler(recipeItem.recipe))}
    >
      <div className="mx-auto  recipe-card-shaodw rounded-2xl cursor-pointer border shadow-lg">
        {loading ? (
          <div className="w-72 h-56">
            <FadeLoader className="mx-auto my-12" />
          </div>
        ) : (
          <img
            src={recipeItem.recipe.image}
            alt={recipeItem.recipe.label}
            className="w-72 h-56 rounded-t-2xl "
          />
        )}

        <div className=" p-2 w-72">
          <div className="flex flex-wrap mb-2">
            <h1 className="w-full h-8 text-xl overflow-hidden">
              {recipeItem.recipe.label}
            </h1>
            <div className={`text-white  capitalize `}>
              {recipeItem.recipe.mealType.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`inline mr-1 p-1 rounded ${
                      item === "breakfast"
                        ? "bg-green-600"
                        : item === "brunch"
                        ? "bg-lime-200 text-black"
                        : item === "lunch/dinner"
                        ? "bg-orange-500"
                        : item === "snack"
                        ? "bg-yellow-200 text-black"
                        : item === "teatime"
                        ? "bg-amber-500"
                        : ""
                    }`}
                  >
                    {item}
                  </div>
                );
              })}
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
    </Link>
  );
};

export default RecipeCard;
