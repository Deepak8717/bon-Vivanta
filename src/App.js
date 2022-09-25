import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Counter from "./redux/Counter";

function App() {
  const [menuType, setMenuType] = useState("mealType");
  const [activeMenuByMenuTypes, setActiveMenuByMenuTypes] =
    useState("breakfast");

  // parent menu on sidebar
  // const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);

  //toggle parent and child menu
  // const mainMenuHandler = () => {
  //   setIsMainMenuOpen(!isMainMenuOpen);
  //   setMenuType("");
  // };

  // child menu on sidebar
  const menuTypeHandler = (menuType) => {
    setMenuType(menuType);
  };

  //grandchild menu or submenu on sidebar
  const activeMenuByMenuTypesHandler = (menuByMenuTypes) => {
    setActiveMenuByMenuTypes(menuByMenuTypes);
  };

  return (
    <div>
      <Outlet
        context={{
          menuType,
          activeMenuByMenuTypes,
          activeMenuByMenuTypesHandler,
          menuTypeHandler,
        }}
      />
    </div>
  );
}

export default App;
