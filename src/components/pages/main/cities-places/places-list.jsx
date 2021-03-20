import React from "react";
import {
  connect
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  sortOffers
} from "../../../../utils/common";
import {
  placeCards as offersPropTypes
} from "../../../../prop-types/offers-validation";

const PlacesList = ({
  offersInCurrentCity
}) => (
  <div className="cities__places-list places__list tabs__content" >
    {offersInCurrentCity.map((offer) => <PlaceCard key={offer.id} offer={offer} isCitiesPlaceCard />)}
  </div>
);

PlacesList.propTypes = {
  offersInCurrentCity: offersPropTypes
};

const mapStateToProps = (state) => ({
  offersInCurrentCity: sortOffers(state.offersInCurrentCity, state.currentSortType)
});

export {
  PlacesList
};

export default connect(mapStateToProps)(PlacesList);
