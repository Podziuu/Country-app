import React from "react";
import millify from 'millify'

const Country = (props) => {
  return (
    <div className="w-3/4 mx-auto py-8 rounded-lg">
      <img className="rounded-t-lg" src={props.data.flags.png} />
      <div className="text-white bg-dark-primary rounded-b-lg p-6">
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
    </div>
  );
};

export default Country;
