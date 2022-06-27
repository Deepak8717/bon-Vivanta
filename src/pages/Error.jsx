import React from "react";
import Navbar from "../layout/Navbar";

const Error = () => {
  return (
    <div className="relative w-full  max-w-screen-2xl font-Lora rounded-lg md:rounded-[30px] px-4 md:px-12  bg-white mx-auto my-0 py-4">
      <Navbar />
      <div className="mx-auto my-32 ">
        <h1 className="text-7xl text-center">404</h1>
        <h2 className="text-3xl  text-center"> Opps! Page not found</h2>
      </div>
    </div>
  );
};

export default Error;
