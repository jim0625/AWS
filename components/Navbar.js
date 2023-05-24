import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex w-[full] justify-between px-2 py-8">
      <HiMenuAlt4 className="cursor-pointer text-3xl text-[#93aff9]" />
      <div className="flex flex-1 place-content-end gap-[30px]">
         <BiSearch className="cursor-pointer text-3xl text-[#93aff9]" />
        <IoIosNotificationsOutline className="cursor-pointer text-3xl text-[#93aff9]" />
      </div>
    </div>
  );
};

export default Navbar;
