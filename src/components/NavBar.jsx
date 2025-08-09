import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="bg-blue-600  font-semibold shadow top-0 left-0 w-full fixed z-50 rounded-b-[3px]">
        <div className="flex justify-between items-center ">
          <div className="text-2xl p-2">
            <h1>Dharshan</h1>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-6 p-2">
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Contact">Contact</a>
          </div>

          {/* Burger icon (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-3xl sm:hidden"
          >
            <CiMenuBurger />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100 text-black space-y-2 px-4 pb-3`}>
          <a href="#About" className="text-lg block" onClick={handleMenu}>About</a>
          <a href="#Skills" className="text-lg block" onClick={handleMenu}>Skills</a>
          <a href="#Contact" className="text-lg block" onClick={handleMenu}>Contact</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
