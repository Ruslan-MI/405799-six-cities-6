import React from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import {
  changeCurrentCity,
} from "../../../../store/actions/main-page";

const LocationsItem = ({
  city,
  currentCity,
  onClick,
}) => {
  const isCurrentCity = currentCity === city;

  const handleTabsItemClick = (evt) => {
    evt.preventDefault();

    if (!isCurrentCity) {
      onClick(city);
    }
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isCurrentCity ? `tabs__item--active` : ``}`} href="#"
        onClick={handleTabsItemClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationsItem.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  MAIN_PAGE,
}) => ({
  currentCity: MAIN_PAGE.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(city) {
    dispatch(changeCurrentCity(city));
  },
});

export {
  LocationsItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsItem);
