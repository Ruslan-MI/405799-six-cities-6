import React from "react";
import LocationsItem from "./locations-item";
import {
  CITIES
} from "../../../../const";

const LocationsList = () => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, i) => <LocationsItem key={i} city={city} />)}
    </ul>
  );
};

export default LocationsList;
