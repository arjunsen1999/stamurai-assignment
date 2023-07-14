import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function TopNavbar() {
  return (
    <>
    <div className="border w-full flex items-center justify-start h-[60px] px-3 bg-[#257CFF] text-[white] py-4">
    <div>
          <GiHamburgerMenu fontSize={"20px"} color="white" />
        </div>
        <div>
          <p className="text-white text-[20px] ml-5 ">Task Management System</p>
        </div>
    </div>
    </>
  )
}
