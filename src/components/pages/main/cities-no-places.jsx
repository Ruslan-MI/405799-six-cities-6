import React from "react";
import {
  useSelector,
} from "react-redux";
import {
  StoreNameSpace,
} from "../../../const";

const CitiesNoPlaces = ({
}) => {
  const {
    currentCity,
  } = useSelector((state) => state[StoreNameSpace.MAIN_PAGE]);

  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
      </div>
    </section>
  );
};

export default CitiesNoPlaces;
