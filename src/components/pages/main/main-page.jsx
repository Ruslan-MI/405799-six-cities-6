import React, {
  useState
} from "react";
import Header from "../../containers/header";
import LocationsList from "./locations-list/locations-list";
import CitiesPlaces from "./cities-places/cities-places";
import CitiesNoPlaces from "./cities-no-places";
import CitiesMap from "./cities-map";
import {
  CITIES
} from "../../../const";
import {
  getOffersInCity
} from "../../../utils/common";
import {
  placeCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const MainPage = ({
  offers
}) => {
  const defaultCity = CITIES[3];
  const [
    currentCity,
    setCurrentCity
  ] = useState(defaultCity);

  const currentOffers = getOffersInCity(offers, currentCity);
  const isNoCurrentOffers = currentOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isNoCurrentOffers ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentCity={currentCity} onClick={setCurrentCity} />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${isNoCurrentOffers ? `cities__places-container--empty` : ``}`}>
            {isNoCurrentOffers ? <CitiesNoPlaces city={currentCity} /> : <CitiesPlaces city={currentCity} offers={currentOffers} />}
            <div className="cities__right-section">
              {isNoCurrentOffers || <CitiesMap offers={currentOffers} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: offersPropTypes
};

export default MainPage;
