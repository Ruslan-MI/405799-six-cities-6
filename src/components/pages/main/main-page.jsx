import React, {
  useEffect
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import LoadingScreen from "../../containers/loading-screen";
import Header from "../../containers/header";
import LocationsList from "./locations-list/locations-list";
import CitiesPlaces from "./cities-places/cities-places";
import CitiesNoPlaces from "./cities-no-places";
import CitiesMap from "./cities-map";
import {
  placeCards as offersPropTypes
} from "../../../prop-types/offers-validation";
import {
  fetchOffers
} from "../../../store/api-actions";

const MainPage = ({
  offersInCurrentCity,
  isDataLoaded,
  onLoadData
}) => {
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const isNoOffersInCurrentCity = offersInCurrentCity.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
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
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offersInCurrentCity: state.offersInCurrentCity,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {
  MainPage
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
