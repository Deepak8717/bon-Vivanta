import { Link, useOutletContext } from "react-router-dom";
import { AiTwotoneHome, AiFillPhone } from "react-icons/ai";
import {
  MdRestaurantMenu,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import Menu from "../components/Menu";
import SubMenu from "../components/SubMenu";
import { useState } from "react";
const Sidebar = () => {
  const { sideMenu } = useOutletContext();
  const [subMenu, setSubMenu] = useState("");
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  return (
    <div className="w-60 fixed inset-y-0  hidden lg:block shadow-2xl">
      <div className=" h-16">{/*Empty space*/}</div>
      <div className="flex font-Babylonica text-5xl font-bold text-slate-800 justify-center mb-8">
        <Link to="/" className=" w-[80%]">
          <div className="inline ">bon</div>
          <div className="inline text-green-600  my-4">Vivanta</div>
        </Link>
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
            onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
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
          <div className={`shadow-md ${isMainMenuOpen ? "block" : "hidden"}`}>
            {subMenu === "" ? <Menu sideMenu={sideMenu} /> : <SubMenu />}
          </div>
        </div>

        <Link to="/" className="text-2xl my-2">
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
