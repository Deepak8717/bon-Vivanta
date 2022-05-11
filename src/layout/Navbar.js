import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export default function Navbar({ sethome, setmenu }) {
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-3 ">
      <div className="  font-Babylonica text-6xl md:text-7xl font-bold text-slate-800 ">
        bon<span className="text-green-600">Vivanta</span>
      </div>

      <div className="hidden md:flex items-center justify-around text-xl">
        <div className="cursor-pointer" onClick={() => sethome()}>
          Home
        </div>
        <div className="cursor-pointer" onClick={() => setmenu()}>
          Menu
        </div>
        <div className="cursor-pointer">Contact</div>
      </div>
      <div className=" md:hidden flex items-center justify-end text-3xl ">
        <button className="cursor-pointer">
          <GiHamburgerMenu className="inline bg-green-200 p-1" />
        </button>
      </div>
      <div className="w-full  col-span-2 lg:col-span-1 flex items-center justify-center relative">
        <input
          type="text"
          className="border px-4 py-2 rounded-[15px] w-full my-4 shadow-md focus:outline-green-500"
          placeholder="search recipes . . . ."
        />
        <button className="absolute right-0 rounded-tr-lg rounded-br-lg text-white bg-green-600 p-2">
          <FiSearch className="inline  mx-1 text-2xl" />
          <div className="hidden md:inline lg:hidden xl:inline">Search</div>
        </button>
      </div>
    </div>
  );
}
