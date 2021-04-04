import React from "react";
import PlaceCard from "../../../containers/place-card";
import {
  propertyPages as offersPropTypes,
} from "../../../../prop-types/offers-validation";

const NearPlacesList = ({
  nearbyOffers,
}) => (
  <div className="near-places__list places__list">
    {nearbyOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} isNearPlacesCard />)}
  </div>
);

NearPlacesList.propTypes = {
  nearbyOffers: offersPropTypes,
};

export default NearPlacesList;
