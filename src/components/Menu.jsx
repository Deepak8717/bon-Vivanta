import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const Menu = ({ sideMenu, menuHandler }) => {
  return (
    <>
      {Object.entries(sideMenu).map(([key], index) => {
        return (
          <div
            key={index}
            className="p-1 px-3 my-4 capitalize text-lg flex justify-between items-center submenu-custom-hover"
            onClick={() => menuHandler(key)}
          >
            <div>{key}</div>
            <MdKeyboardArrowDown />
          </div>
        );
      })}
    </>
  );
};

export default Menu;
