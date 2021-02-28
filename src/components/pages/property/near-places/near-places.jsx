import React from "react";
import NearPlacesList from "./near-places-list";
import {
  propertyPages as offersPropTypes
} from "../../../../prop-types/offers-validation";

const NearPlaces = ({
  offers
}) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <NearPlacesList offers={offers} />
      </section >
    </div >
  );
};

NearPlaces.propTypes = offersPropTypes;

export default NearPlaces;
