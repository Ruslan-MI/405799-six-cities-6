import React from "react";
import PropTypes from "prop-types";
import FavoritesPlaces from "./favorites-places";
import {
  getOffersInCity,
} from "../../../utils/common";
import {
  placeCards as offersPropTypes,
} from "../../../prop-types/offers-validation";
import {
  Link,
} from "react-router-dom";
import {
  AppRoute,
} from "../../../const";
import {
  useDispatch,
} from "react-redux";
import {
  changeCurrentCity,
} from "../../../store/actions/main-page";

const FavoritesLocationsItems = ({
  city,
  favoriteOffers,
}) => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(changeCurrentCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.ROOT} onClick={handleLinkClick}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoritesPlaces favoriteOffersInCity={getOffersInCity(favoriteOffers, city)} />
    </li>
  );
};

FavoritesLocationsItems.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: offersPropTypes,
};

export default FavoritesLocationsItems;
