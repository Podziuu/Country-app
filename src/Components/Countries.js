import React from "react";
import Country from "./Country";
import { MutatingDots } from "react-loader-spinner";

const Countries = (props) => {
  if (props.data.length === 0) {
    return (
      <div className="mx-auto w-full flex items-center justify-center h-[400px]">
        <MutatingDots color="white" secondaryColor="white" />;
      </div>
    );
  }

  return (
    <section className="mt-4 flex flex-col items-center py-6">
      {props.data.map((country, index) => {
        return <Country key={index} data={country} />;
      })}
    </section>
  );
};

export default Countries;
