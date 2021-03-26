import {
  CITIES,
  SortType,
  AuthorizationStatus,
} from "../const";
import {
  ActionType,
} from "./action";
import {
  adaptOfferToClient,
  adaptReviewToClient,
  getOffersInCity,
} from "../utils/common";

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

  authorizationStatus: AuthorizationStatus.VERIFIED,
  currentCity: CITIES[0],
  offersInCurrentCity: [],
  currentSortType: SortType.POPULAR,
  activeOfferID: 0,
  userEmail: ``,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RUN_OFFERS_LOADING:
      return {
        ...state,
        isOffersLoaded: false,
      };
    case ActionType.LOAD_OFFERS:
      const offers = action.payload.map((offer) => adaptOfferToClient(offer));
      return {
        ...state,
        offers,
        offersInCurrentCity: getOffersInCity(offers, state.currentCity),
        isOffersLoaded: true,
      };
    case ActionType.RUN_PROPERTY_PAGE_OFFER_LOADING:
      return {
        ...state,
        isPropertyPageOfferLoaded: false,
      };
    case ActionType.LOAD_PROPERTY_PAGE_OFFER:
      return {
        ...state,
        propertyPageOffer: adaptOfferToClient(action.payload),
        isPropertyPageOfferLoaded: true,
      };
    case ActionType.RUN_REVIEWS_LOADING:
      return {
        ...state,
        isReviewsLoaded: false,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload.map((review) => adaptReviewToClient(review)),
        isReviewsLoaded: true,
      };
    case ActionType.RUN_NEARBY_OFFERS_LOADING:
      return {
        ...state,
        isNearbyOffersLoaded: false,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload.map((offer) => adaptOfferToClient(offer)),
        isNearbyOffersLoaded: true,
      };
    case ActionType.RUN_FAVORITE_OFFERS_LOADING:
      return {
        ...state,
        isFavoriteOffersLoaded: false,
      };
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload.map((offer) => adaptOfferToClient(offer)),
        isFavoriteOffersLoaded: true,
      };

    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        offersInCurrentCity: getOffersInCity(state.offers, action.payload),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };


    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: action.payload,
      };
    case ActionType.RESET_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: initialState.ActiveOfferID,
      };


    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    default:
      return state;
  }
};
