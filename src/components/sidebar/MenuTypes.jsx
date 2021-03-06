import { MdKeyboardArrowDown } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
const MenuTypes = ({ sidebarMenu }) => {
  const { menuTypeHandler } = useOutletContext();
  return (
    <>
      {Object.entries(sidebarMenu).map(([key], index) => {
        return (
          <div
            key={index}
            className="p-1 px-3 my-4 capitalize text-lg flex justify-between items-center submenu-custom-hover"
            onClick={() => menuTypeHandler(key)}
          >
            <div>{key}</div>
            <MdKeyboardArrowDown />
          </div>
        );
      })}
    </>
  );
};

export default MenuTypes;
