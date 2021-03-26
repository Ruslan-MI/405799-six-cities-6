import React from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import PlacesSorting from "./places-sorting/places-sorting";
import PlacesList from "./places-list";
import {
  placeCards as offersPropTypes,
} from "../../../../prop-types/offers-validation";

const CitiesPlaces = ({
  currentCity,
  offersInCurrentCity,
}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersInCurrentCity.length} {offersInCurrentCity.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
      <PlacesSorting />
      <PlacesList />
    </section>
  );
};

CitiesPlaces.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offersInCurrentCity: offersPropTypes,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersInCurrentCity: state.offersInCurrentCity,
});

export {
  CitiesPlaces,
};

export default connect(mapStateToProps)(CitiesPlaces);
