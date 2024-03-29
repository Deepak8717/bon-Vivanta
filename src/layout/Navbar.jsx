import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { searchQryHandler, toggleHamMenu } from "../redux/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { HamMenuModal } from "../components/HamMenuModal";
export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const { hamMenu } = useSelector((state) => state.menu);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SearchOnchange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleCick = (searchInput) => {
    navigate(`/menu/${searchInput}`);
  };
  const handleKeydown = (e) => {
    if (e.code === "Enter") {
      dispatch(searchQryHandler(searchInput));
      handleCick(searchInput);
    }
  };
  return (
    <div className="grid  grid-cols-6  md:grid-cols-12">
      {/* Hamburger menu button */}
      <div className="flex  justify-center  col-span-1 lg:hidden ">
        <button className="lg:hidden" onClick={() => dispatch(toggleHamMenu())}>
          <GiHamburgerMenu className="inline bg-green-200 p-1 text-3xl" />
        </button>
      </div>
      {}
      {hamMenu && <HamMenuModal />}
      {/* Logo section */}
      <div className=" flex  align-center font-Babylonica  text-6xl font-bold text-slate-800 col-span-5 lg:col-span-6">
        <div className="flex">
          <Link to="/" className="my-4">
            <div className="inline ">bon</div>
            <div className="inline text-green-600  my-4">Vivanta</div>
          </Link>
        </div>
      </div>

      {/* Menu Section */}
      <div className="hidden lg:flex items-center justify-around text-xl col-span-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-green-600 text-white rounded p-2" : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "bg-green-600 text-white rounded p-2" : ""
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-green-600 text-white rounded p-2" : ""
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Searchbar Section */}

      <div className="w-full  col-span-2  flex items-center justify-center  col-span-6  lg:col-span-3 ">
        <input
          type="text"
          className="max-w-xl border px-4 py-2 rounded-tl-lg rounded-tr-lg w-full  my-4 shadow-md focus:outline-green-500 relative"
          placeholder="search recipes . . . ."
          value={searchInput}
          onChange={(e) => SearchOnchange(e)}
          onKeyDown={(e) => handleKeydown(e)}
        />
        <button
          className=" relative right-2 rounded-tr-lg rounded-br-lg text-white bg-green-600 p-2"
          onClick={() => {
            dispatch(searchQryHandler(searchInput));
            handleCick(searchInput);
          }}
        >
          <FiSearch className="inline  mx-1 text-2xl" />
        </button>
      </div>
    </div>
  );
}
