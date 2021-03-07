import React, {
  useState
} from "react";
import {
  connect
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  placeCards as offersPropTypes
} from "../../../../prop-types/offers-validation";

const PlacesList = ({
  currentOffers
}) => {
  const [
    // Отсутствует неиспользуемая переменная состояния, чтобы линтер не ругался
    ,
    setActiveOffer
  ] = useState(null);

  const handleMouseEnter = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content" >
      {currentOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnter={handleMouseEnter} isCitiesPlaceCard />)}
    </div>
  );
};

PlacesList.propTypes = {
  currentOffers: offersPropTypes
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers
});

export {
  PlacesList
};

export default connect(mapStateToProps, null)(PlacesList);
