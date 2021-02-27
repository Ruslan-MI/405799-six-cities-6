import React from "react";
import PlaceCard from "../../../containers/place-card";
import {
  propertyPages as offersPropTypes
} from "../../../../prop-types/offers-validation";

const NearPlacesList = ({
  offers
}) => {
  return (
    <div className="near-places__list places__list">
      {new Array(3).fill().map((item, i) => <PlaceCard key={i} offer={offers[i]} />)}
    </div>
  );
};

NearPlacesList.propTypes = offersPropTypes;

export default NearPlacesList;
