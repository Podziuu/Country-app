import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import { HiSearch } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Main = () => {
  const [show, setShow] = useState(false);

  const clickHandler = (e) => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="bg-dark-secondary w-screen">
      <Navbar />
      <div className="flex bg-dark-primary mt-8 mx-4 p-4 rounded-lg">
        <span>
          <HiSearch color="white" size={24} />
        </span>
        <input
          className="bg-dark-primary outline-none text-white ml-6"
          placeholder="Search for a country..."
        />
      </div>
      <div
        onClick={clickHandler}
        className="flex items-center w-[250px] p-4 pl-6 bg-dark-primary text-white rounded-lg ml-4 mt-6 cursor-pointer"
      >
        <span className="mr-12">Filter by Region</span>
        <RiArrowDropDownLine size={36} />
      </div>
      {show && (
        <ul className="bg-dark-primary w-[250px] ml-4 mt-2 rounded-lg text-white p-4 pl-6 leading-8">
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Main;
