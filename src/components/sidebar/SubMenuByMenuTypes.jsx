import { IoCaretBackSharp } from "react-icons/io5";
const SubMenuByMenuTypes = ({
  SubMenuByMenuTypes,
  menuType,
  menuTypeHandler,
  activeMenuHandler,
}) => {
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
        {SubMenuByMenuTypes.map((item, index) => {
          return (
            <div
              key={index}
              className="p-1 px-3 my-2 capitalize text-lg flex justify-between items-center submenu-custom-hover"
              onClick={() => activeMenuHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenuByMenuTypes;
