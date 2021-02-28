import React from "react";
import PlaceCard from "../../containers/place-card";
import {
  placeCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const FavoritesPlaces = ({
  offers
}) => {
  return (
    <div className="favorites__places">
      {offers.map((offer, i) => <PlaceCard key={i} offer={offer} isFavoriteCard />)}
    </div>
  );
};

FavoritesPlaces.propTypes = offersPropTypes;

export default FavoritesPlaces;
