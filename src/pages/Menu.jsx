import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/RecipeGrid";
import { useParams } from "react-router-dom";
const app_Id = process.env.REACT_APP_API_ID;
const app_Key = process.env.REACT_APP_API_KEY;

export default function Menu() {
  let { menu } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [activeMenu, setActiveMenu] = useState(
    menu === undefined ? "breakfast" : menu
  );
  const [isLoading, setIsLoading] = useState(true);
  const activeMenuHandler = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=%22%22&app_id=${app_Id}&app_key=${app_Key}&mealType=${activeMenu}`;
    axios
      .get(baseURL)
      .then((response) => {
        setRecipes(response.data.hits);
      })
      .catch(console.error);
  }, [activeMenu]);

  return (
    <>
      <div className="flex justify-between my-2 h-full">
        <Sidebar
          activeMenuHandler={activeMenuHandler}
          activeMenu={activeMenu}
        />
        <RecipeGrid recipeData={recipes} />
      </div>
    </>
  );
}
