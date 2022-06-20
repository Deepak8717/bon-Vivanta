import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import HamburgerMenu from "./layout/HamburgerMenu";

import "./App.css";
function App() {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);

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
    <div className="relative w-full md:w-11/12 max-w-screen-2xl font-Lora rounded-lg md:rounded-[30px] px-4 md:px-12 py-4 md:py-8 bg-white mx-auto my-0 md:my-4 md:my-8">
      {hamBurgerMenu && (
        <HamburgerMenu toggleHam={toggleHam} sideMenu={sideMenu} />
      )}
      <Navbar toggleHam={toggleHam} />
      <Outlet context={{ sideMenu }} />
    </div>
  );
}

export default App;
