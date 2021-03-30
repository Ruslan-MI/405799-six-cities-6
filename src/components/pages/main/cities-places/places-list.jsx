import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  changeActiveOfferID,
  resetActiveOfferID,
} from "../../../../store/actions/place-card";
import {
  getOffersInCurrentCity,
} from "../../../../store/selectors";

const PlacesList = () => {
  const {
    offersInCurrentCity,
  } = useSelector((state) => ({
    ...getOffersInCurrentCity(state),
  }));

  const dispatch = useDispatch();

  const handlePlaceCardMouseEnter = (id) => {
    dispatch(changeActiveOfferID(id));
  };

  const handlePlaceCardMouseLeave = () => {
    dispatch(resetActiveOfferID());
  };

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offersInCurrentCity.map((offer) => <PlaceCard key={offer.id} offer={offer} isCitiesPlaceCard
        onMouseEnter={handlePlaceCardMouseEnter} onMouseLeave={handlePlaceCardMouseLeave} />)}
    </div>
  );
};

export default PlacesList;
