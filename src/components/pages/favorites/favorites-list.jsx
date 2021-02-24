import React from "react";
import FavoritesLocationsItems from "./favorites-locations-items";
import {
  getFavoriteCities
} from "../../../utils/common";
import {
  favoriteCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const FavoritesList = ({
  offers
}) => {
  return <>
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      {getFavoriteCities(offers).map((city, i) => <FavoritesLocationsItems key={i} city={city} offers={offers} />)}
    </ul>
  </>;
};

FavoritesList.propTypes = offersPropTypes;

export default FavoritesList;
