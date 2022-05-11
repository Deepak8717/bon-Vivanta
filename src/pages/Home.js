import React from "react";
import Hero from "../components/Hero";
import PopularRecipes from "../components/PopularRecipes";
import NutritionalValue from "../components/NutritionalValue";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularRecipes />
      <NutritionalValue />
    </>
  );
}
