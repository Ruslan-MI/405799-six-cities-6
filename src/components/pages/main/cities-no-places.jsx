import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";

const CitiesNoPlaces = ({
  currentCity
}) => {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
      </div>
    </section>
  );
};

CitiesNoPlaces.propTypes = {
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
});

export {
  CitiesNoPlaces
};

export default connect(mapStateToProps)(CitiesNoPlaces);
