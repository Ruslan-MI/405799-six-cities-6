import React from "react";
import PropTypes from "prop-types";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  changeCurrentCity,
} from "../../../../store/actions/main-page";
import {
  StoreNameSpace,
} from "../../../../const";

const LocationsItem = ({
  city,
}) => {
  const {
    currentCity,
  } = useSelector((state) => state[StoreNameSpace.MAIN_PAGE]);

  const isCurrentCity = currentCity === city;

  const dispatch = useDispatch();

  const handleTabsItemClick = (evt) => {
    evt.preventDefault();

    if (!isCurrentCity) {
      dispatch(changeCurrentCity(city));
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
};

export default LocationsItem;
