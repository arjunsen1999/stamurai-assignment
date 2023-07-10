import React from "react";
import NavItems from "./NavItems";

export default function SideBar() {
  return (
    <>
      <div>
        <div className="fixed w-[280px] h-[100vh] bg-white py-[30px]">
          <div className="w-[100%] h-[100%]">
                <NavItems />
          </div>
        </div>
      </div>
    </>
  );
}
