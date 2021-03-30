import React from "react";
import PlaceCard from "../../containers/place-card";
import {
  placeCards as offersPropTypes,
} from "../../../prop-types/offers-validation";

const FavoritesPlaces = ({
  favoriteOffersInCity,
}) => (
  <div className="favorites__places">
    {favoriteOffersInCity.map((offer, i) => <PlaceCard key={i} offer={offer} isFavoriteCard />)}
  </div>
);

FavoritesPlaces.propTypes = {
  favoriteOffersInCity: offersPropTypes,
};

export default FavoritesPlaces;
