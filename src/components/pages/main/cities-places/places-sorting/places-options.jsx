import React from "react";
import PropTypes from "prop-types";
import PlacesOption from "./places-option";
import {
  SortType,
} from "../../../../../const";

const PlacesOptions = ({
  isPlacesOptionsOpened,
  onChange,
}) => {
  return (
    <ul className={`places__options places__options--custom ${isPlacesOptionsOpened ? `places__options--opened` : ``}`}>
      {Object.values(SortType).map((sortType, i) => <PlacesOption key={i} sortType={sortType} onChange={onChange} />)}
    </ul>
  );
};

PlacesOptions.propTypes = {
  isPlacesOptionsOpened: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PlacesOptions;
