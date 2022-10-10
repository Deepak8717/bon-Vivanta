import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneHome, AiFillPhone } from "react-icons/ai";
import {
  MdRestaurantMenu,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import MenuTypes from "../components/sidebar/MenuTypes";
import SubMenuByMenuType from "../components/sidebar/SubMenuByMenuTypes";
import { sidebarMenu } from "../common/sidebarMenuData";
import { useDispatch, useSelector } from "react-redux";
import { mainMenuHandler, searchQryHandler } from "../redux/menuSlice";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Sidebar = () => {
  const { menuType, isMainMenuOpen, hamMenu } = useSelector(
    (state) => state.menu
  );
  const [searchInput, setSearchInput] = useState("");
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
  const subMenuByMenuType = sidebarMenu[menuType];

  return (
    <div
      className={`w-[320px] fixed inset-y-0 ${
        hamMenu ? "block" : "hidden"
      } lg:block shadow-2xl bg-white`}
    >
      <div className="flex font-Babylonica text-5xl font-bold text-slate-800 justify-center mt-16 mb-8">
        <Link to="/" className=" w-[80%]">
          <div className="inline ">bon</div>
          <div className="inline text-green-600  my-4">Vivanta</div>
        </Link>
      </div>
      <div className="relative w-[90%] mx-auto  col-span-2  flex items-center justify-center  col-span-6  lg:col-span-3">
        <input
          type="text"
          className="max-w-xlw-[90%] mx-auto border-2 pl-4 py-2 rounded-tl-lg rounded-tr-lg w-full my-2 shadow-md focus:outline-green-500 "
          placeholder="search recipes . . . ."
          name="searchInput"
          value={searchInput}
          onChange={(e) => SearchOnchange(e)}
          onKeyDown={(e) => handleKeydown(e)}
        />
        <button
          className=" absolute right-0 rounded-tr-lg rounded-br-lg text-white bg-green-600 p-2"
          onClick={() => {
            dispatch(searchQryHandler(searchInput));
            handleCick(searchInput);
          }}
        >
          <FiSearch className="inline  mx-1 text-2xl" />
        </button>
      </div>
      <div className="w-[90%] mx-auto h-60 ">
        <Link to="/" className="text-2xl my-2">
          <div className="flex items-center hover:bg-green-600 hover:text-white p-2 rounded-lg">
            <AiTwotoneHome className="text-xl mx-2" /> Home
          </div>
        </Link>
        <div className="my-2">
          <Link
            to="/menu"
            className="text-2xl "
            onClick={() => dispatch(mainMenuHandler())}
          >
            <div
              className={`flex items-center hover:bg-green-600 hover:text-white p-2 bg-green-600 text-white ${
                isMainMenuOpen ? "rounded-t-md" : "rounded-md"
              }`}
            >
              <MdRestaurantMenu className="text-xl mx-2" />
              <div className="w-full  flex justify-between items-center">
                <div>Menu</div>
                <div>
                  {isMainMenuOpen ? (
                    <MdKeyboardArrowUp className="text-3xl" />
                  ) : (
                    <MdKeyboardArrowDown className="text-3xl" />
                  )}
                </div>
              </div>
            </div>
          </Link>
          <div className={`border ${isMainMenuOpen ? "block" : "hidden"}`}>
            {menuType === "" ? (
              <MenuTypes sidebarMenu={sidebarMenu} />
            ) : (
              <SubMenuByMenuType subMenuByMenuType={subMenuByMenuType} />
            )}
          </div>
        </div>

        <Link to="/contact" className="text-2xl my-2">
          <div className="flex items-center hover:bg-green-600 hover:text-white p-2 rounded-lg">
            <AiFillPhone className="text-xl mx-2" />
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
