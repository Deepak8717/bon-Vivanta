import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="w-full md:w-11/12 max-w-screen-2xl font-Lora rounded-lg md:rounded-[30px] px-4 md:px-12 py-4 md:py-8 bg-white mx-auto my-0 md:my-4 md:my-8">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
