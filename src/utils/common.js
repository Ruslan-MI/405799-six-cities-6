import dayjs from "dayjs";
import {
  SortType,
} from "../const";

const RATING_STAR_WIDTH = 20;

export const getFavoriteCities = (data) =>
  [...new Set(data.map((item) => item.city.name))];

export const getOffersInCity = (data, place) =>
  data.filter((item) => item.city.name === place);

export const getWidthForRating = (data) =>
  Math.round(data) * RATING_STAR_WIDTH;

export const getDateTimeForReviewsTime = (date) => dayjs(date).format(`YYYY-MM-DD`);

export const getDateForReviewsTime = (date) => dayjs(date).format(`MMMM YYYY`);

export const sortByPriceLowToHigh = (pointA, pointB) => {
  if (pointA.price > pointB.price) {
    return 1;
  }

  if (pointA.price < pointB.price) {
    return -1;
  }

  return 0;
};

export const sortByPriceHighToLow = (pointA, pointB) => {
  if (pointA.price < pointB.price) {
    return 1;
  }

  if (pointA.price > pointB.price) {
    return -1;
  }

  return 0;
};

export const sortByRating = (pointA, pointB) => {
  if (pointA.rating < pointB.rating) {
    return 1;
  }

  if (pointA.rating > pointB.rating) {
    return -1;
  }

  return 0;
};

export const sortByDate = (pointA, pointB) => {
  if (pointA.date < pointB.date) {
    return 1;
  }

  if (pointA.date > pointB.date) {
    return -1;
  }

  return 0;
};

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort(sortByPriceLowToHigh);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort(sortByPriceHighToLow);
    case SortType.TOP_RATED_FIRST:
      return offers.slice().sort(sortByRating);
    default:
      return offers;
  }
};

export const sortReviews = (reviews) =>
  reviews.slice().sort(sortByDate);


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
