import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import HamburgerMenu from "./layout/HamburgerMenu";
import "./App.css";

export const recipeContext = createContext();

function App() {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(true);

  const toggleHam = () => {
    setHamBurgerMenu(!hamBurgerMenu);
  };
  //sidebar
  const sideMenu = {
    mealType: ["breakfast", "lunch", "snack", "teatime"],
    cuisineType: [
      "american",
      "asian",
      "british",
      "caribbean",
      "central europe",
      "chinese",
      "eastern europe",
      "french",
    ],
    dishType: ["side dish", "soup", "starter", "sweets"],
  };

  return (
    <div>
      <recipeContext.Provider value={{ toggleHam, sideMenu }}>
        {hamBurgerMenu && <HamburgerMenu />}
      </recipeContext.Provider>

      <Outlet context={{ sideMenu, toggleHam }} />
    </div>
  );
}

export default App;
