import React from "react";

export default function Menu() {
  return (
    <div className="flex  my-8">
      <Sidebar />
      <RecipeContainer />
    </div>
  );
}

const Sidebar = () => {
  return <div className="  w-80 h-[60vh] bg-green-100">Sidebar</div>;
};

const RecipeContainer = () => {
  return <div className="w-[100%]">Mainbar</div>;
};
