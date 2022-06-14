import React from "react";
import Hero from "../components/Hero";
import PopularRecipes from "../components/PopularRecipes";
import NutritionalValue from "../components/NutritionalValue";

import Navbar from "../layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularRecipes />
      <NutritionalValue />
    </>
  );
}
