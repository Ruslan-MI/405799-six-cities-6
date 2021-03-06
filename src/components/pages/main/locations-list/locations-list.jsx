import React from "react";
import PropTypes from "prop-types";
import LocationsItem from "./locations-item";
import {
  CITIES
} from "../../../../const";

const LocationsList = ({
  currentCity,
  onClick
}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, i) => <LocationsItem key={i} city={city} currentCity={currentCity} onClick={onClick} />)}
    </ul>
  );
};

LocationsList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LocationsList;
