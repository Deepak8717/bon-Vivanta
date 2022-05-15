import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export default function Navbar({ sethome, setmenu }) {
  return (
    <div className="grid  grid-cols-6  md:grid-cols-12 ">

      {/* Hamburger menu button */}
      <div className="flex align-center justify-center  col-span-1  ">
      <button className="cursor-pointer ">
          <GiHamburgerMenu className="inline bg-green-200 p-1 text-3xl" />
        </button>
      </div>
        


      {/* Logo section */}
      <div className=" flex  align-center font-Babylonica  text-6xl font-bold text-slate-800 col-span-5  ">
        <div className="flex">
          <div className="my-4">bon</div>
        <div className=" inline text-green-600  my-4">Vivanta</div>
        </div>
       
      </div>


      {/* Menu Section */}
      <div className="hidden lg:flex items-center justify-around text-xl col-span-3">
        
          <Link to="/">Home</Link>
        
        {/* <div className="cursor-pointer" onClick={() => setmenu()}>
          Menu
        </div> */}
        <Link to="/menu">Menu</Link>
        <div className="cursor-pointer">Contact</div>
      </div>

      {/* Searchbar Section */}
      
      <div className="w-full  col-span-2  flex items-center justify-center  col-span-6  lg:col-span-3 ">
        <input
          type="text"
          className="border px-4 py-2 rounded-tl-lg rounded-tr-lg w-full   my-4 shadow-md focus:outline-green-500 relative"
          placeholder="search recipes . . . ."
        />
        <button className=" relative right-2 rounded-tr-lg rounded-br-lg text-white bg-green-600 p-2">
          <FiSearch className="inline  mx-1 text-2xl" />
          {/* <div className="hidden md:inline lg:hidden xl:inline">Search</div> */}
        </button>
      </div>
    </div>
  );
}
