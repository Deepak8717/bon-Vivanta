import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/recipes/RecipeGrid";
import CustomerInputWidget from "../components/sidebar/CustomerInputWidget";
import { fetchRecipes } from "../services/fetchRecipes";
import { useOutletContext } from "react-router-dom";

export default function Menu() {
  const { activeMenuByMenuTypes, menuType } = useOutletContext();
  const [recipes, setRecipes] = useState([]);
  const [desktop, setDesktop] = useState(true);

  const [loading, setLoading] = useState(false);

  const activeMenuWithoutChar = activeMenuByMenuTypes.split("/")[0];
  // to fetch data
  useEffect(() => {
    setLoading(true);
    fetchRecipes(menuType, activeMenuWithoutChar)
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [activeMenuByMenuTypes]);
  // this is to show the horizontal nav on smaller screen
  const updateMedia = () => {
    window.innerWidth < 1024 ? setDesktop(false) : setDesktop(true);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="w-full overflow-none">
        {/* if it's not desktop screen sidebar disapear and navbar apear */}
        {!desktop && <Navbar />}
        <div className="lg:ml-60 ">
          <CustomerInputWidget />
          <RecipeGrid recipeData={recipes} loading={loading} />
        </div>
      </div>
    </>
  );
}
