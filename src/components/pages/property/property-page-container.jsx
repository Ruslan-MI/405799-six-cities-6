import React, {
  useEffect,
} from "react";
import PropTypes from "prop-types";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import PropertyPage from "./property-page";
import {
  fetchReviews,
  fetchPropertyPageOffer,
  fetchNearbyOffers,
} from "../../../store/api-actions";
import {
  StoreNameSpace,
} from "../../../const";

const PropertyPageContainer = ({
  offerID,
}) => {
  const {
    isPropertyPageOfferLoaded,
    isReviewsLoaded,
    isNearbyOffersLoaded,
  } = useSelector((state) => state[StoreNameSpace.DATA]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPropertyPageOffer(offerID));
    dispatch(fetchReviews(offerID));
    dispatch(fetchNearbyOffers(offerID));
  }, [offerID]);

  return <PropertyPage isDataLoaded={isPropertyPageOfferLoaded && isReviewsLoaded && isNearbyOffersLoaded} />;
};

PropertyPageContainer.propTypes = {
  offerID: PropTypes.number.isRequired,
};

export default PropertyPageContainer;
