import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [menuType, setMenuType] = useState("mealType");
  const [activeMenuByMenuTypes, setActiveMenuByMenuTypes] =
    useState("breakfast");

  // sidebar root level menu
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);

  //toggle sidebar and reset menuType
  const mainMenuHandler = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
    setMenuType("");
  };

  const menuTypeHandler = (menuType) => {
    setMenuType(menuType);
  };

  const activeMenuByMenuTypesHandler = (menuByMenuTypes) => {
    setActiveMenuByMenuTypes(menuByMenuTypes);
  };

  return (
    <div>
      <Outlet
        context={{
          menuType,
          activeMenuByMenuTypes,
          isMainMenuOpen,
          activeMenuByMenuTypesHandler,
          mainMenuHandler,
          menuTypeHandler,
        }}
      />
    </div>
  );
}

export default App;
