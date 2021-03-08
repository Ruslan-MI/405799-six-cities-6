import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import PlacesSorting from "./places-sorting/places-sorting";
import PlacesList from "./places-list";
import {
  placeCards as offersPropTypes
} from "../../../../prop-types/offers-validation";

const CitiesPlaces = ({
  currentCity,
  currentOffers
}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{currentOffers.length} {currentOffers.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
      <PlacesSorting />
      <PlacesList />
    </section>
  );
};

CitiesPlaces.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentOffers: offersPropTypes
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentOffers: state.currentOffers
});

export {
  CitiesPlaces
};

export default connect(mapStateToProps, null)(CitiesPlaces);
