import {
  CITIES,
  SortType,
  AuthorizationStatus
} from "../const";
import {
  ActionType
} from "./action";
import {
  adaptToClient,
  getOffersInCity
} from "../utils/common";

const initialState = {
  offers: [],
  currentCity: CITIES[0],
  offersInCurrentCity: [],
  currentSortType: SortType.POPULAR,
  activeOfferID: 0,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  userEmail: ``,
  propertyPageOffer: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        offersInCurrentCity: getOffersInCity(state.offers, action.payload)
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload
      };
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: action.payload
      };
    case ActionType.RESET_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: initialState.ActiveOfferID
      };
    case ActionType.LOAD_OFFERS:
      const offers = action.payload.map((offer) => adaptToClient(offer));

      return {
        ...state,
        offers,
        offersInCurrentCity: getOffersInCity(offers, state.currentCity),
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload
      };
    case ActionType.LOAD_PROPERTY_PAGE_OFFER:
      return {
        ...state,
        propertyPageOffer: adaptToClient(action.payload)
      };
    default:
      return state;
  }
};
