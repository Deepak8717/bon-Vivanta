import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipeData, loading, fetchNext, loadMoreLoading }) => {
  const { activeMenuByMenuTypes } = useSelector((state) => state.menu);
  return (
    <div>
      <div className="w-full md:w-[80%] my-12  mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {loading ? (
          <div className="w-full h-[50vh] flex flex-col justify-center sm:col-span-2 xl:col-span-4 text-center text-5xl font-bold text-slate-600">
            Loading...
          </div>
        ) : recipeData.hits.length === 0 ? (
          <div className="w-full h-[50vh] flex flex-col justify-center sm:col-span-2 xl:col-span-4 text-center text-5xl font-bold text-slate-600 capitalize">
            {activeMenuByMenuTypes}
            <div className="text-2xl">
              will be available soon.
              <p className="text-xl">Please choose a different menu</p>
            </div>
          </div>
        ) : (
          recipeData.hits.map((recipeItem, index) => {
            return (
              <RecipeCard
                key={index}
                recipeItem={recipeItem}
                loading={loading}
              />
            );
          })
        )}
      </div>
      {/* show load more button only if it's not loading or if item length is not */}
      {loading ||
        (recipeData.hits.length !== 0 && (
          <div className="w-full text-center">
            <button
              className="mb-4 bg-green-600 p-2 rounded-lg text-white text-xl"
              onClick={() => fetchNext()}
            >
              {loadMoreLoading ? "Loading...." : "Load more"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default RecipeGrid;
