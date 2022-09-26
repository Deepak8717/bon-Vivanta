import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const RecipeDetails = () => {
  const { activeRecipe } = useSelector((state) => state.menu);
  console.log(activeRecipe);
  const [desktop, setDesktop] = useState(true);
  const updateMedia = () => {
    window.innerWidth < 1024 ? setDesktop(false) : setDesktop(true);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="w-full overflow-none">
        {/* if it's not desktop screen sidebar disapear and navbar apear */}
        {!desktop && <Navbar />}
        <div className="lg:ml-60 ">
          <div className="w-full md:w-[80%] my-12  mx-auto border-2">
            {activeRecipe.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
