import React, {
  memo,
} from "react";
import {
  useSelector,
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  sortOffers,
} from "../../../../utils/common";
import {
  StoreNameSpace,
} from "../../../../const";

const PlacesList = () => {
  const {
    offersInCurrentCity,
    currentSortType,
  } = useSelector((state) => state[StoreNameSpace.MAIN_PAGE]);

  const sortedOffers = sortOffers(offersInCurrentCity, currentSortType);

  return (
    <div className="cities__places-list places__list tabs__content" >
      {sortedOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} isCitiesPlaceCard />)}
    </div>
  );
};

export default memo(PlacesList);
