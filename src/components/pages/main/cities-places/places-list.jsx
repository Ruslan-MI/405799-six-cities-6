import React from "react";
import {
  connect,
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  sortOffers,
} from "../../../../utils/common";
import {
  placeCards as offersPropTypes,
} from "../../../../prop-types/offers-validation";

const PlacesList = ({
  offersInCurrentCity,
}) => (
  <div className="cities__places-list places__list tabs__content" >
    {offersInCurrentCity.map((offer) => <PlaceCard key={offer.id} offer={offer} isCitiesPlaceCard />)}
  </div>
);

PlacesList.propTypes = {
  offersInCurrentCity: offersPropTypes,
};

const mapStateToProps = ({
  MAIN_PAGE,
}) => ({
  offersInCurrentCity: sortOffers(MAIN_PAGE.offersInCurrentCity, MAIN_PAGE.currentSortType),
});

export {
  PlacesList,
};

export default connect(mapStateToProps)(PlacesList);
