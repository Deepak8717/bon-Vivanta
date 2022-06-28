import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipeData }) => {
  const [recipeDisplayCount, setRecipeDisplayCount] = useState(6);
  const loadMoreHandle = () => {
    setRecipeDisplayCount(recipeDisplayCount + 6);
  };
  return (
    <div>
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-4 border-2">
        {recipeData.slice(0, recipeDisplayCount).map((recipeItem, index) => {
          return <RecipeCard key={index} recipeItem={recipeItem} />;
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
          className={`w-32 h-8 m-8 ${recipeDisplayCount <= 20 ? "hidden" : ""}`}
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
