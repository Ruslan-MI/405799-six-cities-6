import React, {
  useEffect,
} from "react";
import {
  connect,
} from "react-redux";
import PropTypes from "prop-types";
import Header from "../../containers/header";
import LocationsList from "./locations-list/locations-list";
import CitiesPlaces from "./cities-places/cities-places";
import CitiesNoPlaces from "./cities-no-places";
import CitiesMap from "./cities-map";
import withLoad from "../../hocs/with-load";
import {
  placeCards as offersPropTypes,
} from "../../../prop-types/offers-validation";
import {
  setOffersInCurrentCity,
} from "../../../store/actions/main-page";
import {
  getOffersInCity,
} from "../../../utils/common";

const MainPage = ({
  offers,
  currentCity,
  offersInCurrentCity,
  onChange,
}) => {
  useEffect(() => {
    onChange(getOffersInCity(offers, currentCity));
  }, [
    offers,
    currentCity,
  ]);

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
  offers: offersPropTypes,
  currentCity: PropTypes.string.isRequired,
  offersInCurrentCity: offersPropTypes,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  DATA,
  MAIN_PAGE,
}) => ({
  offers: DATA.offers,
  currentCity: MAIN_PAGE.currentCity,
  offersInCurrentCity: MAIN_PAGE.offersInCurrentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChange(data) {
    dispatch(setOffersInCurrentCity(data));
  },
});

export {
  MainPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(withLoad(MainPage));
