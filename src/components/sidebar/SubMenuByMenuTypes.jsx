import { IoCaretBackSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
const SubMenuByMenuTypes = ({ subMenuByMenuType }) => {
  const {
    menuType,
    activeMenuByMenuTypes,
    activeMenuByMenuTypesHandler,
    menuTypeHandler,
  } = useOutletContext();
  return (
    <div>
      <div className="flex items-center capitalize my-2 text-lg italic">
        <IoCaretBackSharp
          className="mx-3 w-6 h-6 cursor-pointer"
          onClick={() => menuTypeHandler("")}
        />
        <div className="bg-green-600 px-2 text-white">{menuType}</div>
      </div>
      <div className="overflow-y-auto max-h-96">
        {subMenuByMenuType.map((item, index) => {
          return (
            <Link to={`/${menuType}/${item.replace(/[^a-zA-Z0-9]/g, "_")}`}>
              <div
                key={index}
                className={`p-1 px-3 my-2 capitalize text-lg flex justify-between items-center submenu-custom-hover ${
                  activeMenuByMenuTypes === item ? "submenu-active" : ""
                }`}
                onClick={() => activeMenuByMenuTypesHandler(item)}
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
