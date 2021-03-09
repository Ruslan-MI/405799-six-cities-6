import {
  CITIES,
  SortType
} from "../const";
import {
  ActionType
} from "./action";
import {
  getOffersInCity
} from "../utils/common";
import getMockOffers from "../mocks/offers";

const offers = getMockOffers();
const initialCity = CITIES[0];
const initialOffers = getOffersInCity(offers, initialCity);
const initialSortType = SortType.POPULAR;
const initialActiveOfferID = 0;

const initialState = {
  currentCity: initialCity,
  currentOffers: initialOffers,
  currentSortType: initialSortType,
  activeOfferID: initialActiveOfferID
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: getOffersInCity(offers, action.payload)
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        currentOffers: action.payload
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
        activeOfferID: initialActiveOfferID
      };
    default:
      return state;
  }
};
