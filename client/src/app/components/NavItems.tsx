import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
export default function NavItems() {
  return (
    <>
      <div className="w-[100%] bg-[#202123] p-[10px] flex items-center justify-start gap-[20px]  cursor-pointer hover:bg-[#343541]">
        <div>
          <BiSolidDashboard fontSize={"20px"} color="white" />
        </div>
        <div>
          <p className="text-white  text-[20px]">Dashboard</p>
        </div>
      </div>
    </>
  );
}
