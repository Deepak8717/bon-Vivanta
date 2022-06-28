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
  const [desktop, setDesktop] = useState(true);
  const [activeMenu, setActiveMenu] = useState(
    menu === undefined ? "lunch" : menu
  );

  const activeMenuHandler = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=%22%22&app_id=${app_Id}&app_key=${app_Key}&cuisineType=American&mealType=${activeMenu}&dishType=Soup`;
    axios
      .get(baseURL)
      .then((response) => {
        setRecipes(response.data.hits);
      })
      .catch(console.error);
  }, [activeMenu]);

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
      <div className="w-full lg:w-[85%]   absolute right-0 border-2 ">
        {!desktop && <Navbar />}
        main
      </div>
    </>
  );
}
