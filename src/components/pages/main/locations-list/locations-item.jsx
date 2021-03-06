import React from "react";
import PropTypes from "prop-types";

const LocationsItem = ({
  city,
  currentCity,
  onClick
}) => {
  const handleTabsItemClick = (evt) => {
    evt.preventDefault();
    onClick(city);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#"
        onClick={handleTabsItemClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationsItem.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LocationsItem;
