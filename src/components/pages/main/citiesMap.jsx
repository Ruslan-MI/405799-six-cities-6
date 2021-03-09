import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import Map from "../../containers/map";
import {
  map as offersPropTypes
} from "../../../prop-types/offers-validation";

const CitiesMap = ({
  currentOffers,
  activeOfferID
}) => {
  return (
    <section className="cities__map map">
      <Map offers={currentOffers} activeOfferID={activeOfferID} />
    </section>
  );
};

CitiesMap.propTypes = {
  currentOffers: offersPropTypes,
  activeOfferID: PropTypes.number
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers,
  activeOfferID: state.activeOfferID
});

export {
  CitiesMap
};

export default connect(mapStateToProps, null)(CitiesMap);
