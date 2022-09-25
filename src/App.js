import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
