import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../layout/Sidebar";
import { toggleHamMenu } from "../redux/menuSlice";
export const HamMenuModal = () => {
  const dispatch = useDispatch();
  const { hamMenu } = useSelector((state) => state.menu);
  return (
    <div className="modal-custom">
      <div className="absolute z-20 w-[320px] text-right">
        <button
          className="m-2 px-2 text-2xl hover:bg-green-600 hover:text-white"
          onClick={() => dispatch(toggleHamMenu())}
        >
          X
        </button>
      </div>

      {hamMenu && <Sidebar />}
    </div>
  );
};
