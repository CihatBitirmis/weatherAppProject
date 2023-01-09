import React from "react";

const City = ({ city }) => {
  return (
    <div>
        <h1 className="mt-5">{city.main.temp}</h1>
        <h1 className="mt-3">{city.name}</h1>
        <h1 className="mt-3">{city.weather[0].main}</h1>
    </div>
  );
};

export default City;
