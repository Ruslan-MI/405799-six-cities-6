import React from "react";
import PropTypes from "prop-types";
import FavoritesPlaces from "./favorites-places";
import {
  getOffersInCity
} from "../../../utils/common";
import {
  placeCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const FavoritesLocationsItems = ({
  city,
  favoriteOffers
}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoritesPlaces favoriteOffersInCity={getOffersInCity(favoriteOffers, city)} />
    </li>
  );
};

FavoritesLocationsItems.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: offersPropTypes
};

export default FavoritesLocationsItems;
