import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import PlaceCard from "../../../containers/place-card";
import {
  SortType
} from "../../../../const";
import {
  sortPriceLowToHigh,
  sortPriceHighToLow,
  sortRating
} from "../../../../utils/common";
import {
  placeCards as offersPropTypes
} from "../../../../prop-types/offers-validation";

const PlacesList = ({
  currentOffers,
  currentSortType
}) => {
  const defaultSortingOffers = currentOffers.slice();

  const getSortedOffer = (sortType) => {
    switch (sortType) {
      case SortType.PRICE_LOW_TO_HIGH:
        return currentOffers.slice().sort(sortPriceLowToHigh);
      case SortType.PRICE_HIGH_TO_LOW:
        return currentOffers.slice().sort(sortPriceHighToLow);
      case SortType.TOP_RATED_FIRST:
        return currentOffers.slice().sort(sortRating);
      default:
        return defaultSortingOffers;
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content" >
      {getSortedOffer(currentSortType).map((offer) => <PlaceCard key={offer.id} offer={offer} isCitiesPlaceCard />)}
    </div>
  );
};

PlacesList.propTypes = {
  currentOffers: offersPropTypes,
  currentSortType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers,
  currentSortType: state.currentSortType
});

export {
  PlacesList
};

export default connect(mapStateToProps, null)(PlacesList);
