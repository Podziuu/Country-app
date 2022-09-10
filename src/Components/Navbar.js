import React, { useState } from "react";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <nav className="flex justify-between px-6 bg-dark-primary py-10 text-white">
      <h1 className="font-semibold">Where in the world?</h1>
      <div className="flex items-center cursor-pointer">
        <HiMoon className="mr-2" />
        Dark Mode
      </div>
    </nav>
  );
};

export default Navbar;

// flex justify-between px-8 bg-dark-primary py-10 text-white