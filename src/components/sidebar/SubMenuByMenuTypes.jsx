import { IoCaretBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  menuTypeHandler,
  activeMenuByMenuTypesHandler,
} from "../../redux/menuSlice";
const SubMenuByMenuTypes = ({ subMenuByMenuType }) => {
  const { menuType, activeMenuByMenuTypes } = useSelector(
    (state) => state.menu
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center capitalize my-2 text-lg italic">
        <IoCaretBackSharp
          className="mx-3 w-6 h-6 cursor-pointer"
          onClick={() => dispatch(menuTypeHandler(""))}
        />
        <div className="bg-green-600 px-2 text-white">{menuType}</div>
      </div>
      <div className="overflow-y-auto max-h-96">
        {subMenuByMenuType.map((item, index) => {
          return (
            <Link
              to={`/menu/${menuType}/${item.replace(/[^a-zA-Z0-9]/g, "_")}`}
              key={index}
            >
              <div
                className={`p-1 px-3 my-2 capitalize text-lg flex justify-between items-center submenu-custom-hover ${
                  activeMenuByMenuTypes === item ? "submenu-active" : ""
                }`}
                onClick={() => dispatch(activeMenuByMenuTypesHandler(item))}
              >
                {item}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenuByMenuTypes;
