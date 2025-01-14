"use client";
import Link from "next/link";
import Menu from "../components/Menu";
import Image from "next/image";
import Navbar from "../components/Navbar";
import React from "react";
import useDarkMode from "../store/useDarkMode";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setDarkMode = useDarkMode((state) => state.setDarkMode);
  const { darkMode } = useDarkMode();

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [setDarkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex bg-white dark:bg-gray-900 text-gray-900 min-h-screen">
        {/* Left Sidebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-100 dark:bg-gray-800 dark:text-gray-500">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start p-4 gap-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block font-semibold dark:text-white">Dashboard</span>
          </Link>
          <Menu />
        </div>
        {/* Right Content */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] dark:bg-gray-900 overflow-y-auto flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}
