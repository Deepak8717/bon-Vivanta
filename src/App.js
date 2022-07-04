import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

export const recipeContext = createContext();

function App() {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);

  const toggleHam = () => {
    setHamBurgerMenu(!hamBurgerMenu);
  };
  //sidebar
  const sidebarMenu = {
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
      <Outlet context={{ sidebarMenu, toggleHam }} />
    </div>
  );
}

export default App;
