import React from "react";
import Map from "../../containers/map";
import {
  map as offersPropTypes,
} from "../../../prop-types/offers-validation";

const PropertyMap = ({
  nearbyOffers,
}) => {
  return (
    <section className="property__map map">
      <Map offers={nearbyOffers} />
    </section>
  );
};

PropertyMap.propTypes = {
  nearbyOffers: offersPropTypes,
};

export default PropertyMap;
