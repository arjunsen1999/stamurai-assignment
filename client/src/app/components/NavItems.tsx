import React from "react";
import {BiSolidDashboard} from "react-icons/bi"
export default function NavItems() {
  return (
    <>
      <div className="w-[100%] bg-[#F8FAFC] p-[10px] flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[teal]">
         <div><BiSolidDashboard fontSize={"20px"} color="black" /></div>
         <div><p className="text-black font-bold text-[20px]">Dashboard</p></div>
      </div>
    </>
  );
}
