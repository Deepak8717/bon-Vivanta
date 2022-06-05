import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Menu from "./pages/Menu";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:menu" element={<Menu />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
