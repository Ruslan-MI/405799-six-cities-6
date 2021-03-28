import React from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import Map from "../../containers/map";
import {
  map as offersPropTypes,
} from "../../../prop-types/offers-validation";

const CitiesMap = ({
  offersInCurrentCity,
  activeOfferID,
}) => {
  return (
    <section className="cities__map map">
      <Map offers={offersInCurrentCity} activeOfferID={activeOfferID} />
    </section>
  );
};

CitiesMap.propTypes = {
  offersInCurrentCity: offersPropTypes,
  activeOfferID: PropTypes.number,
};

const mapStateToProps = ({
  MAIN_PAGE,
  PLACE_CARD,
}) => ({
  offersInCurrentCity: MAIN_PAGE.offersInCurrentCity,
  activeOfferID: PLACE_CARD.activeOfferID,
});

export {
  CitiesMap,
};

export default connect(mapStateToProps)(CitiesMap);
