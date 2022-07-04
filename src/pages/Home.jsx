import React from "react";
import Hero from "../components/home/Hero";
import PopularRecipes from "../components/home/PopularRecipes";
import NutritionalValue from "../components/home/NutritionalValue";

import Navbar from "../layout/Navbar";

export default function Home() {
  return (
    <div className="relative w-full  max-w-screen-2xl font-Lora rounded-lg md:rounded-[30px] px-4 md:px-12   mx-auto  py-4 ">
      <Navbar />
      <Hero />
      <PopularRecipes />
      <NutritionalValue />
    </div>
  );
}
