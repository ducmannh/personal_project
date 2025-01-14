"use client";
import Image from "next/image";
import React from "react";
import useDarkMode from "../store/useDarkMode";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none dark:text-white"
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <button
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/mingcute--notification-fill.png"
            alt="notification"
            width={25}
            height={25}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] leading-3 font-medium dark:text-gray-300">Đức Mạnh</span>
          <span className="text-[13px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full "
        />
      </div>
    </div>
  );
};

export default Navbar;
