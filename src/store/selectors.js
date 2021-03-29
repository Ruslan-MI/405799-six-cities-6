import {
  createSelector,
} from "reselect";
import {
  StoreNameSpace,
} from "../const";
import {
  getOffersInCity,
  sortOffers,
} from "../utils/common";

const getOffers = (state) => state[StoreNameSpace.DATA].offers;

const getCurrentCity = (state) => state[StoreNameSpace.MAIN_PAGE].currentCity;

const getCurrentSortType = (state) => state[StoreNameSpace.MAIN_PAGE].currentSortType;

export const getOffersInCurrentCity = createSelector([
  getOffers,
  getCurrentCity,
  getCurrentSortType,
], (offers, currentCity, currentSortType) => ({
  offersInCurrentCity: sortOffers(getOffersInCity(offers, currentCity), currentSortType)
}));
