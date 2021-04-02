import React from "react";
import LocationsItem from "./locations-item";
import {
  CITIES,
} from "../../../../const";
import {
  appendIDForArrayItems,
} from "../../../../utils/common";

const LocationsList = () => (
  <ul className="locations__list tabs__list">
    {appendIDForArrayItems(CITIES).map(({
      item,
      id,
    }) => <LocationsItem key={id} city={item} />)}
  </ul>
);

export default LocationsList;
