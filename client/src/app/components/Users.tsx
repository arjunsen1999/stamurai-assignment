import React from "react";
import { TbUsersGroup } from "react-icons/tb";
export default function Users() {
  return (
    <>
      <div className="w-[100%] bg-[#202123] p-[10px] flex items-center justify-start gap-[20px]  cursor-pointer hover:bg-[#343541]">
        <div>
          <TbUsersGroup fontSize={"20px"} color="white" />
        </div>
        <div>
          <p className="text-white text-[20px]">Users</p>
        </div>
      </div>
    </>
  );
}
