import dayjs from "dayjs";
import {
  SortType,
} from "../const";
import {
  toast,
} from "./toast/toast";

export const getFavoriteCities = (data) =>
  [...new Set(data.map((item) => item.city.name))];

export const getOffersInCity = (data, place) =>
  data.filter((item) => item.city.name === place);

export const getWidthForRating = (data) =>
  data > 5 ? 100 : data * 20;

export const getDateTimeForReviewsTime = (date) => dayjs(date).format(`YYYY-MM-DD`);

export const getDateForReviewsTime = (date) => dayjs(date).format(`MMMM YYYY`);

export const sortPriceLowToHigh = (pointA, pointB) => {
  if (pointA.price > pointB.price) {
    return 1;
  }

  if (pointA.price < pointB.price) {
    return -1;
  }

  return 0;
};

export const sortPriceHighToLow = (pointA, pointB) => {
  if (pointA.price < pointB.price) {
    return 1;
  }

  if (pointA.price > pointB.price) {
    return -1;
  }

  return 0;
};

export const sortRating = (pointA, pointB) => {
  if (pointA.rating < pointB.rating) {
    return 1;
  }

  if (pointA.rating > pointB.rating) {
    return -1;
  }

  return 0;
};

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort(sortPriceLowToHigh);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort(sortPriceHighToLow);
    case SortType.TOP_RATED_FIRST:
      return offers.slice().sort(sortRating);
    default:
      return offers;
  }
};

export const updateFavoriteOffer = (offers, updatedOffer) => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (index < 0) {
    return offers;
  }

  return [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1)
  ];
};

export const toastAddFavoritesNoAuthMessage = () => {
  toast(`Authorization is required to add offers to favorites`);
};
