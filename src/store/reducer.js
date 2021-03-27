import {
  CITIES,
  SortType,
  AuthorizationStatus,
} from "../const";
import {
  ActionType as dataActionType,
} from "./actions/data";
import {
  ActionType as mainPageActionType,
} from "./actions/main-page";
import {
  ActionType as placeCardActionType,
} from "./actions/place-card";
import {
  ActionType as userActionType,
} from "./actions/user";
import {
  adaptOfferToClient,
  adaptReviewToClient,
  adaptAuthInfoToClient,
  getOffersInCity,
  updateFavoriteOffer,
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
  userAvatar: ``,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case dataActionType.RUN_OFFERS_LOADING:
      return {
        ...state,
        isOffersLoaded: false,
      };
    case dataActionType.LOAD_OFFERS:
      const offers = action.payload.map((offer) => adaptOfferToClient(offer));
      return {
        ...state,
        offers,
        offersInCurrentCity: getOffersInCity(offers, state.currentCity),
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
        propertyPageOffer: adaptOfferToClient(action.payload),
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
        reviews: action.payload.map((review) => adaptReviewToClient(review)),
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
        nearbyOffers: action.payload.map((offer) => adaptOfferToClient(offer)),
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
        favoriteOffers: action.payload.map((offer) => adaptOfferToClient(offer)),
        isFavoriteOffersLoaded: true,
      };
    case dataActionType.UPDATE_FAVORITE_STATUS:
      const adaptedPayload = adaptOfferToClient(action.payload);
      return {
        ...state,
        favoriteOffers: updateFavoriteOffer(state.favoriteOffers, adaptedPayload),
        offers: updateFavoriteOffer(state.offers, adaptedPayload),
        offersInCurrentCity: updateFavoriteOffer(state.offersInCurrentCity, adaptedPayload),
        propertyPageOffer: adaptedPayload,
        nearbyOffers: updateFavoriteOffer(state.nearbyOffers, adaptedPayload),
      };

    case mainPageActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        offersInCurrentCity: getOffersInCity(state.offers, action.payload),
      };
    case mainPageActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };


    case placeCardActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: action.payload,
      };
    case placeCardActionType.RESET_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: initialState.ActiveOfferID,
      };


    case userActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case userActionType.CHANGE_USER_DATA:
      const adaptedAuthInfo = adaptAuthInfoToClient(action.payload);
      return {
        ...state,
        userAvatar: adaptedAuthInfo.avatarUrl,
        userEmail: adaptedAuthInfo.email,
      };
    default:
      return state;
  }
};
