import React, {
  memo,
} from "react";
import PlaceCard from "../../../containers/place-card";
import {
  propertyPages as offersPropTypes,
} from "../../../../prop-types/offers-validation";

const NearPlacesList = ({
  nearbyOffers,
}) => {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((offer, i) => <PlaceCard key={i} offer={offer} isNearPlacesCard />)}
    </div>
  );
};

NearPlacesList.propTypes = {
  nearbyOffers: offersPropTypes,
};

export default memo(NearPlacesList);
