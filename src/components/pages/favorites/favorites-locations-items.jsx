import React from "react";
import PropTypes from "prop-types";
import FavoritesCard from "./favorites-card";
import {
  getOffersInCity
} from "../../../utils/common";
import {
  favoriteCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const FavoritesLocationsItems = ({
  city,
  offers
}) => {
  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {getOffersInCity(offers, city).map((offer, i) => <FavoritesCard key={i} offer={offer} />)}
    </div>
  </li>;
};

FavoritesLocationsItems.propTypes = {
  city: PropTypes.string.isRequired,
  ...offersPropTypes
};

export default FavoritesLocationsItems;
