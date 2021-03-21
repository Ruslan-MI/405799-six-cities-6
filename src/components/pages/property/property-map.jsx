import React from "react";
import Map from "../../containers/map";
import {
  map as offersPropTypes
} from "../../../prop-types/offers-validation";

const PropertyMap = ({
  nearOffers
}) => {
  return (
    <section className="property__map map">
      <Map offers={nearOffers} />
    </section>
  );
};

PropertyMap.propTypes = {
  nearOffers: offersPropTypes
};

export default PropertyMap;
