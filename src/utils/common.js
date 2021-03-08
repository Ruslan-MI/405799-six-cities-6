import dayjs from "dayjs";

export const getFavoriteOffers = (data) =>
  data.filter((item) => item.isFavorite);

export const getFavoriteCities = (data) =>
  [...new Set(data.map((item) => item.city.name))];

export const getOffersInCity = (data, place) =>
  data.filter((item) => item.city.name === place);

export const getWidthForRating = (data) =>
  data > 5 ? 100 : data * 20;

export const getOfferForID = (data, identifier) =>
  data.find((item) => item.id === parseFloat(identifier));

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
