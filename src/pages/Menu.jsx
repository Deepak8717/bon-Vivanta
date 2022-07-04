import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/recipes/RecipeGrid";
import CustomerInputWidget from "../components/sidebar/CustomerInputWidget";
const app_Id = process.env.REACT_APP_API_ID;
const app_Key = process.env.REACT_APP_API_KEY;

export default function Menu() {
  const [recipes, setRecipes] = useState([]);
  const [desktop, setDesktop] = useState(true);
  const [activeMenu, setActiveMenu] = useState("breakfast");

  const activeMenuHandler = (menu) => {
    setActiveMenu(menu);
  };

  // to fetch data
  // useEffect(() => {
  //   const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=%22%22&app_id=${app_Id}&app_key=${app_Key}&cuisineType=American&mealType=${activeMenu}&dishType=Soup`;
  //   axios
  //     .get(baseURL)
  //     .then((response) => {
  //       setRecipes(response.data.hits);
  //     })
  //     .catch(console.error);
  // }, [activeMenu]);

  //this is to show the horizontal nav on smaller screen
  const updateMedia = () => {
    window.innerWidth < 1024 ? setDesktop(false) : setDesktop(true);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <Sidebar activeMenuHandler={activeMenuHandler} />
      <div className="w-full overflow-none">
        {/* if it's not desktop screen sidebar disapear and navbar apear */}
        {!desktop && <Navbar />}
        <div className="lg:ml-60 ">
          <CustomerInputWidget />
          <RecipeGrid recipeData={recipes} />
        </div>
      </div>
    </>
  );
}
