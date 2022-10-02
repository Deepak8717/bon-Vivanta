import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import RecipeDetails from "./pages/RecipeDetails";
import Error from "./pages/Error";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:searchqry" element={<Menu />} />
          <Route path="menu/:menu/:submenu" element={<Menu />} />
          <Route
            path="menu/:submenu/:recipe/:recipeId"
            element={<RecipeDetails />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
