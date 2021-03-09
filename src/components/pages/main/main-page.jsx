import React from "react";
import {
  connect
} from "react-redux";
import Header from "../../containers/header";
import LocationsList from "./locations-list/locations-list";
import CitiesPlaces from "./cities-places/cities-places";
import CitiesNoPlaces from "./cities-no-places";
import CitiesMap from "./citiesMap";
import {
  placeCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const MainPage = ({
  currentOffers
}) => {
  const isNoCurrentOffers = currentOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isNoCurrentOffers ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${isNoCurrentOffers ? `cities__places-container--empty` : ``}`}>
            {isNoCurrentOffers ? <CitiesNoPlaces /> : <CitiesPlaces />}
            <div className="cities__right-section">
              {isNoCurrentOffers || <CitiesMap />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  currentOffers: offersPropTypes
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers,
});

export {
  MainPage
};

export default connect(mapStateToProps, null)(MainPage);
