import React from "react";
import NavItems from "./NavItems";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Users from "./Users";

export default function SideBar() {
  return (
    <>
      <div>
        <div className="fixed w-[280px] h-[100vh] bg-[#202123] border">
          <div className="w-[100%] h-[60px] bg-[#202123] text-white flex justify-center items-center font-bold text-2xl">
            ADMIN
          </div>
          <div className="w-[100%] h-[100%]">
            <NavItems />
            <Projects />
            <Users />
            <Tasks />
          </div>
        </div>
      </div>
    </>
  );
}
