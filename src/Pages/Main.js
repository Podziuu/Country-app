import React, { useEffect, useState } from "react";
import Countries from "../Components/Countries";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../store/countries";

import { HiSearch } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGetCountriesByRegionQuery, useGetAllCountriesQuery } from "../api";

const Main = () => {
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [isCountry, setIsCountry] = useState(true);
  // const dispatch = useDispatch()
  // const {data} = useGetCountriesByRegionQuery('Europe', {skip: true})
  // const {data: countriesq, isFetching, error} = useGetAllCountriesQuery

  // console.log(data)

  // const count = useSelector((state) => state.countries.countries)

  // console.log(count)

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setAllCountries(response.data);
      // dispatch(countriesActions.add(response.data))
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
    const enteredCountry = capitalizeFirstLetter(e.target.value);
    const filteredCountries = allCountries.filter((country) =>
      country.name.common.startsWith(enteredCountry)
    );
    if (filteredCountries.length === 0) {
      setIsCountry(false);
    } else {
      setIsCountry(true);
      setCountries(filteredCountries);
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className={`dark:bg-dark-secondary bg-light-primary text-light-text dark:text-white w-full min-h-screen pt-8`}
    >
      <div className="lg:flex lg:justify-between 2xl:px-36 sm:px-12">
        <div
          className={`flex dark:bg-dark-primary bg-white mx-4 p-4 rounded-lg lg:w-1/3 h-fit drop-shadow-lg`}
        >
          <span>
            <HiSearch className="dark:text-white text-light-secondary" size={24} />
          </span>
          <input
            className="dark:bg-dark-primary outline-none dark:text-white bg-white ml-6 w-full h-fit"
            placeholder="Search for a country..."
            onChange={changeHandler}
          />
        </div>
        <div>
          <div
            onClick={clickHandler}
            className="flex items-center w-[250px] p-4 pl-6 dark:bg-dark-primary dark:text-white bg-white text-light-text shadow-lg rounded-lg ml-4 mt-6 cursor-pointer lg:mr-4"
          >
            <span className="mr-12">Filter by Region</span>
            <RiArrowDropDownLine size={36} />
          </div>
          {show && (
            <ul className="dark:bg-dark-primary bg-white w-[250px] ml-4 mt-2 rounded-lg dark:text-white text-light-text p-4 pl-6 leading-8">
              <li className="cursor-pointer" onClick={regionHandler}>
                Africa
              </li>
              <li className="cursor-pointer" onClick={regionHandler}>
                America
              </li>
              <li className="cursor-pointer" onClick={regionHandler}>
                Asia
              </li>
              <li className="cursor-pointer" onClick={regionHandler}>
                Europe
              </li>
              <li className="cursor-pointer" onClick={regionHandler}>
                Oceania
              </li>
            </ul>
          )}
        </div>
      </div>
      <Countries data={countries} isCountry={isCountry} />
    </div>
  );
};

export default Main;
