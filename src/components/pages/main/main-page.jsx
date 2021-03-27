import React from "react";
import {
  connect,
} from "react-redux";
import Header from "../../containers/header";
import LocationsList from "./locations-list/locations-list";
import CitiesPlaces from "./cities-places/cities-places";
import CitiesNoPlaces from "./cities-no-places";
import CitiesMap from "./cities-map";
import withLoad from "../../hocs/with-load";
import {
  placeCards as offersPropTypes,
} from "../../../prop-types/offers-validation";

const MainPage = ({
  offersInCurrentCity,
}) => {
  const isNoOffersInCurrentCity = offersInCurrentCity.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header isMainPage />
      <main className={`page__main page__main--index ${isNoOffersInCurrentCity ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${isNoOffersInCurrentCity ? `cities__places-container--empty` : ``}`}>
            {isNoOffersInCurrentCity ? <CitiesNoPlaces /> : <CitiesPlaces />}
            <div className="cities__right-section">
              {isNoOffersInCurrentCity || <CitiesMap />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offersInCurrentCity: offersPropTypes,
};

const mapStateToProps = (state) => ({
  offersInCurrentCity: state.offersInCurrentCity,
});

export {
  MainPage,
};

export default connect(mapStateToProps)(withLoad(MainPage));
