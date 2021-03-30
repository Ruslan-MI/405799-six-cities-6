import React from "react";
import {
  useSelector,
} from "react-redux";
import Map from "../../containers/map";
import {
  StoreNameSpace,
} from "../../../const";
import {
  getOffersInCurrentCity,
} from "../../../store/selectors";

const CitiesMap = () => {
  const {
    activeOfferID,
    currentCity,
    offersInCurrentCity,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.PLACE_CARD],
    ...state[StoreNameSpace.MAIN_PAGE],
    ...getOffersInCurrentCity(state),
  }));

  return (
    <section className="cities__map map">
      <Map offers={offersInCurrentCity} activeOfferID={activeOfferID} currentCity={currentCity} />
    </section>
  );
};

export default CitiesMap;
