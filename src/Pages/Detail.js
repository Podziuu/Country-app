import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Detail = () => {
  const [country, setCountry] = useState([]);
  const params = useParams();
  const code = params.id;
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => setCountry(response.data[0]));
  }, [code]);
  console.log(country);

  if (country.length === 0) {
    return "Loading...";
  }

  const currencies = Object.values(country.currencies).map(
    (currency) => currency.name
  );

  const languages = Object.values(country.languages);

  console.log(country.borders);

  return (
    <div className="min-h-screen dark:bg-dark-secondary bg-light-primary text-light-text dark:text-white px-10 pt-8 2xl:px-36 sm:px-12">
      <Link
        to="/"
        className="flex items-center bg-white dark:bg-dark-primary py-2 px-8 shadow-xl w-fit"
      >
        <HiArrowNarrowLeft className="mr-4" size={24} />
        Back
      </Link>
      <div className="w-full mt-12">
        <img
          className="w-[300px] h-[200px] mx-auto md:w-[400px] md:h-[250px] lg:float-left 2xl:w-[600px] 2xl:h-1/2"
          src={country.flags.png}
          alt="flag"
        />
        <div className="flex flex-col sm:flex-row justify-between sm:items-center md:flex-col lg:items-start lg:pl-24">
          <h2 className="font-bold text-xl mt-12">{country.name.common}</h2>
          <div className="lg:flex lg:items-center">
            <ul className="my-6 leading-8">
              <li>
                <span className="font-semibold">Official Name:</span>{" "}
                {country.name.official}
              </li>
              <li>
                <span className="font-semibold">Population:</span>{" "}
                {country.population}
              </li>
              <li>
                <span className="font-semibold">Region:</span> {country.region}
              </li>
              <li>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </li>
              <li>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital[0]}
              </li>
            </ul>
            <ul className="leading-8 lg:ml-24">
              <li>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld[0]}
              </li>
              <li>
                <span className="font-semibold">Currencies:</span> {currencies}
              </li>
              <li>
                <span className="font-semibold">Languages:</span>{" "}
                {languages.join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div>
        {country.borders &&
          country.borders.map((border) => {
            return border;
          })}
        </div> */}
    </div>
  );
};

export default Detail;
