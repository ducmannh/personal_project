"use client";
import Image from "next/image";
import React from "react";
import useDarkMode from "../store/useDarkMode";
import useAuthStore from "../store/useAuthStore";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { accessToken, logout } = useAuthStore();

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
        {accessToken ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Xin chào
            </span>
            <button
              onClick={logout}
              className="text-sm text-red-500 hover:underline"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <a href="/login" className="text-sm text-blue-500 hover:underline">
            Đăng nhập
          </a>
        )}

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
