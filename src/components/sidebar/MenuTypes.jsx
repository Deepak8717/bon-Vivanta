import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { menuTypeHandler } from "../../redux/menuSlice";
const MenuTypes = ({ sidebarMenu }) => {
  const dispatch = useDispatch();
  return (
    <>
      {Object.entries(sidebarMenu).map(([key], index) => {
        return (
          <div
            key={index}
            className="p-1 px-3 my-4 capitalize text-lg flex justify-between items-center submenu-custom-hover"
            onClick={() => dispatch(menuTypeHandler(key))}
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
