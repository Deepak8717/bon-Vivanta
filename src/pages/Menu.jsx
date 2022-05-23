import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/RecipeGrid";
const app_Id = process.env.REACT_APP_API_ID;
const app_Key = process.env.REACT_APP_API_KEY;

export default function Menu() {
  const [recipes, setRecipes] = useState([]);
  const [activeMenu, setActiveMenu] = useState("breakfast");
  const activeMenuHandler = (menu) => {
    setActiveMenu(menu);
  };
  // const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=%22%22&app_id=${app_Id}&app_key=${app_Key}&mealType=${activeMenu}`;
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response.data.hits);
  //     setRecipes(response.data.hits);
  //     localStorage.setItem("recipes", JSON.stringify(response.data.hits));
  //   });
  // }, [activeMenu]);
  const data = JSON.parse(localStorage.getItem("recipes"));

  return (
    <div className="w-full md:w-11/12 max-w-screen-2xl font-Lora rounded-lg md:rounded-[30px] px-4 md:px-12 py-4 md:py-8 bg-white mx-auto my-0 md:my-4 md:my-8">
      <Navbar />
      <div className="flex my-2">
        <Sidebar activeMenu={activeMenuHandler} />
        <RecipeGrid recipeData={data} />
      </div>
    </div>
  );
}
