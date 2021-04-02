import React from "react";
import PropTypes from "prop-types";
import PlacesOption from "./places-option";
import {
  SortType,
} from "../../../../../const";
import {
  appendIDForArrayItems,
} from "../../../../../utils/common";

const PlacesOptions = ({
  isPlacesOptionsOpened,
  onClick,
}) => (
  <ul className={`places__options places__options--custom ${isPlacesOptionsOpened ? `places__options--opened` : ``}`}>
    {appendIDForArrayItems(Object.values(SortType)).map(({
      item,
      id,
    }) => <PlacesOption key={id} sortType={item} onClick={onClick} />)}
  </ul>
);

PlacesOptions.propTypes = {
  isPlacesOptionsOpened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlacesOptions;
