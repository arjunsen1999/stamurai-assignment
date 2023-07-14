import React from "react";
import { BsStack } from "react-icons/bs";

export default function ProjectDetailsCards() {
  return (
    <>
      <div className="border py-[20px] px-[10px] flex items-center justify-around bg-white cursor-pointer">
        <div className="flex flex-col items-start justify-center gap-[10px]">
          <h1 className="font-bold text-[30px]">2</h1>
          <p className="text-[gray]">Total Projects</p>
        </div>
        <div>
          <BsStack fontSize={"60px"} color="gray" />
        </div>
        {/* <div className="border border-red-500"></div> */}
      </div>
    </>
  );
}
