import React from "react";
import millify from 'millify'
import { Link } from "react-router-dom";

const Country = (props) => {
  const id = props.data.cca2
  return (
    <Link to={`/${id}`}className="w-[300px] my-8 rounded-lg mx-auto">
      <img className="rounded-t-lg w-[300px] h-[200px]" src={props.data.flags.png} alt="flag" />
      <div className="dark:text-white dark:bg-dark-primary text-light-text bg-white drop-shadow-xl rounded-b-lg p-6 h-[200px] flex flex-col justify-center">
        <h5 className="font-bold text-lg">{props.data.name.common}</h5>
        <p className="mt-4">
          <span className="font-semibold">Poplution: </span>
          {millify(props.data.population)}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Region: </span>
          {props.data.region}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Capital: </span>
          {props.data.capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
