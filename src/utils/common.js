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
