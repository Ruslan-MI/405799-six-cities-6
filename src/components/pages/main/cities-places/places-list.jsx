import React from "react";
import {
  useSelector,
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  sortOffers,
} from "../../../../utils/common";

const PlacesList = () => {
  const {
    offersInCurrentCity,
    currentSortType,
  } = useSelector((state) => state.MAIN_PAGE);

  const sortedOffers = sortOffers(offersInCurrentCity, currentSortType);

  return (
    <div className="cities__places-list places__list tabs__content" >
      {sortedOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} isCitiesPlaceCard />)}
    </div>
  );
};

export default PlacesList;
