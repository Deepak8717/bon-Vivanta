import React from "react";
import Hero from "./Hero";
import PopularRecipes from "./PopularRecipes";
import NutritionalValue from "./NutritionalValue";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularRecipes />
      <NutritionalValue />
    </>
  );
}
