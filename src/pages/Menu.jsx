import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/recipes/RecipeGrid";
import { fetchRecipes } from "../services/fetchRecipes";
import { useSelector } from "react-redux";
import { HamMenuModal } from "../components/HamMenuModal";
import { data } from "../sampleData";
import axios from "axios";
export default function Menu() {
  const { activeMenuByMenuTypes, menuType, searchQry, hamMenu } = useSelector(
    (state) => state.menu
  );
  const { innerWidth } = window;
  const [recipes, setRecipes] = useState();
  const [desktop, setDesktop] = useState(innerWidth > 1024 ? true : false);
  const [loading, setLoading] = useState(false);

  const activeMenuWithoutChar = activeMenuByMenuTypes.split("/")[0];

  // to fetch data
  useEffect(() => {
    setLoading(true);
    fetchRecipes(searchQry, menuType, activeMenuWithoutChar)
      .then((data) => {
        setRecipes(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [searchQry, activeMenuByMenuTypes]);
  const fetchNext = () => {
    axios
      .get(recipes._links.next.href)
      .then(function (response) {
        // handle success
        setRecipes((prevState) => ({
          ...prevState,
          hits: [...recipes.hits, ...response.data.hits],
        }));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const updateMedia = () => {
    window.innerWidth < 1024 ? setDesktop(false) : setDesktop(true);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  console.log(recipes);
  return (
    <>
      {hamMenu ? <HamMenuModal /> : <Sidebar />}

      <div className="w-full overflow-none">
        {/* if it's not desktop screen sidebar disapear and navbar apear */}
        {!desktop && <Navbar />}
        <div className="lg:ml-60 ">
          {recipes === undefined ? (
            <>
              <div className="w-full h-[50vh] flex flex-col justify-center sm:col-span-2 xl:col-span-4 text-center text-5xl font-bold text-slate-600 capitalize">
                <div className="text-2xl">
                  Edamam recipe Api Server is down
                  <p className="text-xl">Please try after sometime</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <RecipeGrid recipeData={recipes} loading={loading} />
              <div className="w-full text-center">
                <button className="mb-4" onClick={() => fetchNext()}>
                  Pagination
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
