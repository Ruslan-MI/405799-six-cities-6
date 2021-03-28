import React from "react";
import {
  useSelector,
} from "react-redux";
import Map from "../../containers/map";

const CitiesMap = () => {
  const {
    offersInCurrentCity,
  } = useSelector((state) => state.MAIN_PAGE);

  const {
    activeOfferID,
  } = useSelector((state) => state.PLACE_CARD);

  return (
    <section className="cities__map map">
      <Map offers={offersInCurrentCity} activeOfferID={activeOfferID} />
    </section>
  );
};

export default CitiesMap;
