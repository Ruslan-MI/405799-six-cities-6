import dayjs from "dayjs";
import {
  SortType,
} from "../const";

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

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const adaptAuthInfoToClient = (data) => {
  const adaptedAuthInfo = {
    ...data,
    avatarUrl: data.avatar_url,
    isPro: data.is_pro,
  };

  delete adaptedAuthInfo.avatar_url;
  delete adaptedAuthInfo.is_pro;

  return adaptedAuthInfo;
};

export const updateFavoriteOffer = (offers, updatedOffer) => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);

  return [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1)
  ];
};
