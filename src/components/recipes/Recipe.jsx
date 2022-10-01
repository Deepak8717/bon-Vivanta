import React from "react";
import { Pie } from "react-chartjs-2";
export const Recipe = (activeRecipe) => {
  const { recipe } = activeRecipe;
  const data = {
    labels: ["FAT", "CARBS", "FIBER", "SUGAR", "PROTIN", "CHOLESTEROL"],
    datasets: [
      {
        label: "Nutrients",
        data: [
          recipe.totalNutrients.FAT.quantity,
          recipe.totalNutrients.CHOCDF.quantity,
          recipe.totalNutrients.FIBTG.quantity,
          recipe.totalNutrients.SUGAR.quantity,
          recipe.totalNutrients.PROCNT.quantity,
          recipe.totalNutrients.CHOLE.quantity,
        ],
        backgroundColor: [
          "rgb(255, 255, 102)",
          "rgb(204, 204, 204)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(51, 255, 173)",
          "rgba(255, 102, 102)",
        ],
      },
    ],
  };
  return (
    <div>
      <div className="lg:ml-60">
        <div className="w-[95%] md:w-[80%] mt-12  mx-auto flex flex-col md:flex-row">
          <div className="mx-auto md:mx-0">
            <img
              src={recipe.image}
              className="rounded-lg w-[500px] h-[500px]"
            />
          </div>
          <div className=" w-full md:w-[50%] mx-auto md:mx-8 my-4 md:my-0 text-center md:text-left">
            <h1 className="text-4xl font-medium">{recipe.label}</h1>
            <div className="flex justify-center md:justify-start  my-4 text-slate-500">
              <div className="flex flex-col items-center w-28  border-x-2">
                <div className="text-2xl">{recipe.totalTime}</div>
                <div className="text-sm">Min</div>
              </div>
              <div className="flex flex-col items-center w-28 mx-1  border-x-2">
                <div className="text-3xl">{recipe.ingredientLines.length}</div>
                <div className="text-sm">Ingredients</div>
              </div>
              <div className="flex flex-col items-center w-28  mx-1  border-x-2">
                <div className="text-2xl">{recipe.calories.toFixed(2)}</div>
                <div className="text-sm">Calories</div>
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-start flex-wrap gap-1 text-xl  px-2 p-1">
              <div
                className={`capitalize p-1 bg-slate-200 mx-2 px-2 rounded-lg `}
              >
                {recipe.cuisineType}
              </div>
              <span className="text-2xl">/</span>
              <div className="capitalize p-1 bg-slate-200 mx-2 px-2 rounded-lg ">
                {recipe.mealType}
              </div>
              <span className="text-2xl">/</span>
              <div className="capitalize p-1 bg-slate-200 mx-2 px-2 rounded-lg ">
                {recipe.dishType}
              </div>
            </div>
            <Pie
              data={data}
              className="max-w-[350px] max-h-[350px] mx-auto md:mx-0 my-2"
            />
          </div>
        </div>

        <div className="w-[95%] md:w-[80%]  mx-auto flex flex-col md:flex-row border-t-2">
          <div className="w-full md:w-[50%] max-w-[400px] lg:max-w-[550px] my-2 mx-auto md:mx-0 text-left">
            <div className="flex justify-between w-[90%] my-2 ">
              <h1 className=" capitalize text-2xl">Ingredients</h1>
              <div className="capitalize font-bold">
                {recipe.yield} Servings
              </div>
            </div>
            <ul className="mx-4 list-disc">
              {recipe.ingredientLines.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className="w-fit mx-4 capitalize p-1 px-2 font-bold cursor-pointer rounded-full bg-green-600 text-white text-xl">
              <a href={recipe.url} target="_blank">
                Get Instructions
              </a>
            </div>
          </div>
          <div className="w-full md:w-[50%] max-w-[400px] lg:max-w-[550px] my-4 mx-auto md:mx-0 text-left  ">
            <div className="flex flex-wrap gap-1">
              <div className=" w-96 h-fit p-2 border-l-4 mx-2  shadow-md shadow-slate-600">
                <div className="text-sm">Calories</div>
                <div className="text-2xl md:text-3xl text-slate-600">
                  {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
                  <span className="text-lg">Kal</span>
                </div>
              </div>
              <div className="h-fit p-2 border-l-4 mx-2 shadow-md shadow-slate-600 ">
                <div className="text-sm">Carbs</div>
                <div className="text-2xl md:text-3xl text-slate-600">
                  {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
                  <span className="text-lg">g</span>
                </div>
              </div>
              <div className="h-fit p-2 border-l-4 mx-2 shadow-md shadow-slate-600 ">
                <div className="text-sm">Protein</div>
                <div className="text-2xl md:text-3xl text-slate-600">
                  {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}
                  <span className="text-lg">g</span>
                </div>
              </div>
              <div className="h-fit p-2 border-l-4 mx-2 shadow-md shadow-slate-600 ">
                <div className="text-sm">Fat</div>
                <div className="text-2xl md:text-3xl text-slate-600">
                  {recipe.totalNutrients.FAT.quantity.toFixed(2)}
                  <span className="text-lg">g</span>
                </div>
              </div>
            </div>
            <div className="flex my-2">
              {recipe.dietLabels.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="m-2 my-1 p-1 px-2 rounded-xl border-4 border-green-600"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex my-2">
              {recipe.cautions.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="m-2 my-1 p-1 px-2 rounded-xl bg-rose-600 text-white font-bold"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap my-2">
              {recipe.healthLabels.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="m-2 my-1 p-1 px-2 rounded-xl border-2"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
