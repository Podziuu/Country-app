import React, { useEffect } from "react";
import Country from "./Country";
import { MutatingDots } from "react-loader-spinner";

const Countries = (props) => {
  if(!props.isCountry) {
    return <div className="text-white mt-8 text-center">
      Sorry we can't find the country you're searching for :(
    </div>
  }

  if (props.data.length === 0) {
    return (
      <div className="mx-auto w-full flex items-center justify-center h-[400px]">
        <MutatingDots color="white" secondaryColor="white" />;
      </div>
    );
  }

  return (
    <section className="mt-4 flex flex-col items-center py-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-36">
      {props.data.map((country, index) => {
        return <Country key={index} data={country} />;
      })}
    </section>
  );
};

export default Countries;
