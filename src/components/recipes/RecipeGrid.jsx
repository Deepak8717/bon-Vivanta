import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipeData }) => {
  return (
    <div>
      <div className="w-full md:w-[80%] my-12  mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {recipeData.map((recipeItem, index) => {
          return <RecipeCard key={index} recipeItem={recipeItem} />;
        })}
      </div>
    </div>
  );
};

export default RecipeGrid;
