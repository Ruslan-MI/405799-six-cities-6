import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
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
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
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
