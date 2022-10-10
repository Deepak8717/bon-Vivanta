import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import RecipeGrid from "../components/recipes/RecipeGrid";
import CustomerInputWidget from "../components/sidebar/CustomerInputWidget";
import { fetchRecipes } from "../services/fetchRecipes";
import { useSelector } from "react-redux";
import { HamMenuModal } from "../components/HamMenuModal";
export default function Menu() {
  const { activeMenuByMenuTypes, menuType, searchQry, hamMenu } = useSelector(
    (state) => state.menu
  );
  const { innerWidth } = window;
  const [recipes, setRecipes] = useState([]);
  const [desktop, setDesktop] = useState(innerWidth > 1024 ? true : false);
  const [loading, setLoading] = useState(false);

  console.log(desktop);
  const activeMenuWithoutChar = activeMenuByMenuTypes.split("/")[0];
  // to fetch data
  useEffect(() => {
    setLoading(true);
    fetchRecipes(searchQry, menuType, activeMenuWithoutChar)
      .then((data) => {
        setRecipes(data.hits);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [searchQry, activeMenuByMenuTypes]);
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
      {hamMenu ? <HamMenuModal /> : <Sidebar />}

      <div className="w-full overflow-none">
        {/* if it's not desktop screen sidebar disapear and navbar apear */}
        {!desktop && <Navbar />}
        <div className="lg:ml-60 ">
          {/* <CustomerInputWidget /> */}
          <RecipeGrid recipeData={recipes} loading={loading} />
        </div>
      </div>
    </>
  );
}
