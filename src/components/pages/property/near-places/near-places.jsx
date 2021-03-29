import React from "react";
import NearPlacesList from "./near-places-list";
import {
  propertyPages as offersPropTypes,
} from "../../../../prop-types/offers-validation";

const NearPlaces = ({
  nearbyOffers,
}) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <NearPlacesList nearbyOffers={nearbyOffers} />
    </section >
  </div >
);

NearPlaces.propTypes = {
  nearbyOffers: offersPropTypes,
};

export default NearPlaces;
