import React from "react";
import { BsStack } from "react-icons/bs";
export default function Projects() {
  return (
    <>
      <div className="w-[100%] bg-[#202123] p-[10px] flex items-center justify-start gap-[20px]  cursor-pointer hover:bg-[#343541]">
        <div>
          <BsStack fontSize={"20px"} color="white" />
        </div>
        <div>
          <p className="text-white  text-[20px]">Projects</p>
        </div>
      </div>
    </>
  );
}
