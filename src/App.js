import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "./layout/HamburgerMenu";
import "./App.css";

export const recipeContext = createContext();

function App() {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);

  const toggleHam = () => {
    setHamBurgerMenu(!hamBurgerMenu);
  };
  //sidebar
  const sideMenu = {
    "meal type": ["breakfast", "brunch", "lunch/dinner", "snack", "teatime"],
    "cuisine type": [
      "american",
      "asian",
      "british",
      "caribbean",
      "central europe",
      "chinese",
      "eastern europe",
      "french",
      "greek",
      "indian",
      "italian",
      "japanese",
      "korean",
      "kosher",
      "mediterranean",
      "mexican",
      "middle eastern",
      "nordic",
      "south american",
      "south east asian",
      "world",
    ],
    "dish type": [
      "alcohol cocktail",
      "biscuits and cookies",
      "bread",
      "cereals",
      "condiments and sauces",
      "desserts",
      "drinks",
      "egg",
      "ice cream and custard",
      "main course",
      "pancake",
      "pasta",
      "pastry",
      "pies and tarts",
      "pizza",
      "preps",
      "preserve",
      "salad",
      "sandwiches",
      "seafood",
      "side dish",
      "soup",
      "special occasions",
      "starter",
      "sweets",
    ],
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
