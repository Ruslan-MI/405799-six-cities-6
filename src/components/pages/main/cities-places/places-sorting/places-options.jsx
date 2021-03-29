import React from "react";
import PropTypes from "prop-types";
import PlacesOption from "./places-option";
import {
  SortType,
} from "../../../../../const";

const PlacesOptions = ({
  isPlacesOptionsOpened,
  onClick,
}) => (
  <ul className={`places__options places__options--custom ${isPlacesOptionsOpened ? `places__options--opened` : ``}`}>
    {Object.values(SortType).map((sortType, i) => <PlacesOption key={i} sortType={sortType} onClick={onClick} />)}
  </ul>
);

PlacesOptions.propTypes = {
  isPlacesOptionsOpened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlacesOptions;
