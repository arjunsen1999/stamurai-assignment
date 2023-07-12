import React from "react";
import { FaTasks } from "react-icons/fa";
export default function Tasks() {
  return (
    <>
      <div className="w-[100%] bg-[#202123] p-[10px] flex items-center justify-start gap-[20px]  cursor-pointer hover:bg-[#343541]">
        <div>
          <FaTasks fontSize={"20px"} color="white" />
        </div>
        <div>
          <p className="text-white text-[20px]">Tasks</p>
        </div>
      </div>
    </>
  );
}
