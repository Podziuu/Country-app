import React from "react";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { darkmodeActions } from "../store/darkmode";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.darkmode.darkMode)

  const clickHandler = (e) => {
    dispatch(darkmodeActions.toggle())
  };

  const classes = isDarkMode
    ? "bg-dark-primary text-white"
    : "bg-light-primary text-light-text";

  return (
    <nav className={`flex justify-between px-6 ${classes} py-10 2xl:px-36 sm:px-12 drop-shadow-lg`}>
      <h1 className="font-semibold">Where in the world?</h1>
      <div onClick={clickHandler} className="flex items-center cursor-pointer">
        {isDarkMode && <HiMoon className="mr-2" />}
        {!isDarkMode && <HiOutlineMoon className="mr-2" />}
        Dark Mode
      </div>
    </nav>
  );
};

export default Navbar;