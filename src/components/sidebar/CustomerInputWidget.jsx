import { FiSearch } from "react-icons/fi";
const CustomerInputWidget = () => {
  return (
    <div className="max-w-[80%] h-[350px] my-8  mx-auto text-center shadow">
      <h1 className="capitalize  text-2xl mt-4 font-bold">
        Get meal recomendation
      </h1>
      <div className="w-2xl h-24 my-2">
        <div className="w-full  col-span-2  flex items-center justify-center  col-span-6  lg:col-span-3 ">
          <input
            type="text"
            className="max-w-xl border px-4 py-2 rounded-tl-lg rounded-tr-lg w-full  my-4 shadow-md focus:outline-green-500 relative"
            placeholder="search recipes . . . ."
          />
          <button className=" relative right-2 rounded-tr-lg rounded-br-lg text-white bg-green-600 p-2">
            <FiSearch className="inline  mx-1 text-2xl" />
          </button>
        </div>
      </div>
      <div className="border-2 h-60">slider</div>
    </div>
  );
};

export default CustomerInputWidget;
