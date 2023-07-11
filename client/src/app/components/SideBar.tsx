import React from "react";
import NavItems from "./NavItems";

export default function SideBar() {
  return (
    <>
      <div>
        <div className="fixed w-[280px] h-[100vh] bg-white border">
          <div className="w-[100%] h-[60px]"></div>
          <div className="w-[100%] h-[100%]">
                <NavItems />
          </div>
        </div>
      </div>
    </>
  );
}
