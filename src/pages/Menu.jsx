import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/recipes/RecipeGrid";
import CustomerInputWidget from "../components/sidebar/CustomerInputWidget";
import { fetchMealType } from "../services/fetch-mealtype";

export default function Menu() {
  const [recipes, setRecipes] = useState([]);
  const [desktop, setDesktop] = useState(true);
  const [activeMenu, setActiveMenu] = useState("breakfast");
  const [loading, setLoading] = useState(false);

  const activeMenuWithoutChar = activeMenu.split("/")[0];

  const activeMenuHandler = (menu) => {
    setActiveMenu(menu);
  };
  // to fetch data
  useEffect(() => {
    setLoading(true);
    fetchMealType(activeMenuWithoutChar)
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [activeMenu]);
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
      <Sidebar activeMenuHandler={activeMenuHandler} activeMenu={activeMenu} />
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
