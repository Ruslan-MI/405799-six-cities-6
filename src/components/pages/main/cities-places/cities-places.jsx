import React from "react";
import {
  useSelector,
} from "react-redux";
import PlacesSorting from "./places-sorting/places-sorting";
import PlacesList from "./places-list";
import {
  StoreNameSpace,
} from "../../../../const";
import {
  getOffersInCurrentCity,
} from "../../../../store/selectors";

const CitiesPlaces = () => {
  const {
    currentCity,
    offersInCurrentCity,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.MAIN_PAGE],
    ...getOffersInCurrentCity(state),
  }));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersInCurrentCity.length} {offersInCurrentCity.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
      <PlacesSorting />
      <PlacesList />
    </section>
  );
};

export default CitiesPlaces;
