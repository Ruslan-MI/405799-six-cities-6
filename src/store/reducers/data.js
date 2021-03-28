import {
  ActionType as dataActionType,
} from "../actions/data";
import {
  updateFavoriteOffer,
} from "../../utils/common";

const initialState = {
  isOffersLoaded: false,
  offers: [],
  isPropertyPageOfferLoaded: false,
  propertyPageOffer: null,
  isReviewsLoaded: false,
  reviews: [],
  isNearbyOffersLoaded: false,
  nearbyOffers: [],
  isFavoriteOffersLoaded: false,
  favoriteOffers: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case dataActionType.RUN_OFFERS_LOADING:
      return {
        ...state,
        isOffersLoaded: false,
      };
    case dataActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true,
      };
    case dataActionType.RUN_PROPERTY_PAGE_OFFER_LOADING:
      return {
        ...state,
        isPropertyPageOfferLoaded: false,
      };
    case dataActionType.LOAD_PROPERTY_PAGE_OFFER:
      return {
        ...state,
        propertyPageOffer: action.payload,
        isPropertyPageOfferLoaded: true,
      };
    case dataActionType.RUN_REVIEWS_LOADING:
      return {
        ...state,
        isReviewsLoaded: false,
      };
    case dataActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    case dataActionType.RUN_NEARBY_OFFERS_LOADING:
      return {
        ...state,
        isNearbyOffersLoaded: false,
      };
    case dataActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
        isNearbyOffersLoaded: true,
      };
    case dataActionType.RUN_FAVORITE_OFFERS_LOADING:
      return {
        ...state,
        isFavoriteOffersLoaded: false,
      };
    case dataActionType.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true,
      };
    case dataActionType.UPDATE_FAVORITE_STATUS:
      return {
        ...state,
        favoriteOffers: updateFavoriteOffer(state.favoriteOffers, action.payload),
        offers: updateFavoriteOffer(state.offers, action.payload),
        propertyPageOffer: action.payload,
        nearbyOffers: updateFavoriteOffer(state.nearbyOffers, action.payload),
      };
    default:
      return state;
  }
};
