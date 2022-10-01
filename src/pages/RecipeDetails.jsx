import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchRecipe } from "../services/fetchRecipes";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Recipe } from "../components/recipes/Recipe";
ChartJs.register(ArcElement, Tooltip, Legend);

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [activeRecipe, setActiveRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRecipe(recipeId)
      .then((recipeData) => {
        setActiveRecipe(recipeData.recipe);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [recipeId]);

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
        {!desktop && <Navbar />}
        {
          loading ? (
            <></>
          ) : Object.keys(activeRecipe).length === 0 ? (
            <></>
          ) : (
            <Recipe recipe={activeRecipe} />
          )

          // <>{activeRecipe.label}</>
        }
      </div>
    </div>
  );
};

export default RecipeDetails;
