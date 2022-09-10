import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Countries from "../Components/Countries";
import axios from "axios";

import { HiSearch } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Main = () => {
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setAllCountries(response.data);
    });
  }, []);

  const clickHandler = (e) => {
    setShow((prevState) => !prevState);
  };

  const regionHandler = async (e) => {
    const region = e.target.outerText;

    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        setCountries(response.data);
        setAllCountries(response.data);
      });
    setShow(false);
  };

  const changeHandler = (e) => {
    const filteredCountries = allCountries.filter((country) =>
      country.name.common.startsWith(e.target.value)
    );
    setCountries(filteredCountries);
  };

  return (
    <div className="bg-dark-secondary w-screen min-h-[100vh]">
      <Navbar />
      <div className="flex bg-dark-primary mt-8 mx-4 p-4 rounded-lg">
        <span>
          <HiSearch color="white" size={24} />
        </span>
        <input
          className="bg-dark-primary outline-none text-white ml-6"
          placeholder="Search for a country..."
          onChange={changeHandler}
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
          <li onClick={regionHandler}>Africa</li>
          <li onClick={regionHandler}>America</li>
          <li onClick={regionHandler}>Asia</li>
          <li onClick={regionHandler}>Europe</li>
          <li onClick={regionHandler}>Oceania</li>
        </ul>
      )}
      <Countries data={countries} />
    </div>
  );
};

export default Main;
