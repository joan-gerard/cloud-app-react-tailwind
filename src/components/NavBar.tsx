import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const handleToggleNavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={() => handleToggleNavMenu()}>
          {openNavMenu ? (
            <XMarkIcon className="w-5" />
          ) : (
            <Bars3Icon className="w-5" />
          )}
        </div>
      </div>

      <div>
        <ul
          className={
            openNavMenu ? "absolute bg-zinc-200 w-full px-8" : "hidden"
          }
        >
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <div className="flex flex-col">
            <button className="bg-transparent text-indigo-600 px-8 mb-4">
              Sign In
            </button>
            <button className="px-8">Sign Up</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
