import {
  CITIES
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

const initialState = {
  currentCity: initialCity,
  currentOffers: initialOffers
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
    default:
      return state;
  }
};
