import React, {
  useEffect,
} from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import PropertyPage from "./property-page";
import {
  fetchReviews,
  fetchPropertyPageOffer,
  fetchNearbyOffers,
} from "../../../store/api-actions";

const PropertyPageContainer = ({
  offerID,
  isPropertyPageOfferLoaded,
  isReviewsLoaded,
  isNearbyOffersLoaded,
  onLoadData,
}) => {
  useEffect(() => {
    onLoadData(offerID);
  }, [offerID]);

  return <PropertyPage isDataLoaded={isPropertyPageOfferLoaded && isReviewsLoaded && isNearbyOffersLoaded} />;
};

PropertyPageContainer.propTypes = {
  offerID: PropTypes.number.isRequired,
  isPropertyPageOfferLoaded: PropTypes.bool.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  isNearbyOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  DATA,
}) => ({
  isPropertyPageOfferLoaded: DATA.isPropertyPageOfferLoaded,
  isReviewsLoaded: DATA.isReviewsLoaded,
  isNearbyOffersLoaded: DATA.isNearbyOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchPropertyPageOffer(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearbyOffers(id));
  },
});

export {
  PropertyPageContainer,
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPageContainer);
