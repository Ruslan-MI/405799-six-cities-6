import React, {
  useState
} from "react";
import PlaceCard from "../../containers/place-card";
import {
  placeCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const PlacesList = ({
  offers
}) => {
  const [
    ,
    setActiveOffer
  ] = useState(null);

  const handleMouseEnter = (offer) => {
    setActiveOffer(offer);
  };

  return <div className="cities__places-list places__list tabs__content" >
    {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnter={handleMouseEnter} />)}
  </div>;
};

PlacesList.propTypes = offersPropTypes;

export default PlacesList;