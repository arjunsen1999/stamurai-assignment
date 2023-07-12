import React from "react";
import { FaTasks } from "react-icons/fa";

export default function TaskDetailsCards() {
  return (
    <>
      <div className="border py-[20px] px-[10px] flex items-center justify-around bg-white cursor-pointer">
        <div className="flex flex-col items-start justify-center gap-[10px]">
          <h1 className="font-bold text-[30px]">4</h1>
          <p className="text-[gray]">Total Tasks</p>
        </div>
        <div>
          <FaTasks fontSize={"60px"} color="gray" />
        </div>
        <div className="border border-red-500"></div>
      </div>
    </>
  );
}
