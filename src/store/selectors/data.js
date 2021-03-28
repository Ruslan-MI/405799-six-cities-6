import {
  StoreNameSpace,
} from "../../const";

export const getIsOffersLoaded = (state) => state[StoreNameSpace.DATA].isOffersLoaded;
export const getOffers = (state) => state[StoreNameSpace.DATA].offers;

export const getIsPropertyPageOfferLoaded = (state) => state[StoreNameSpace.DATA].isPropertyPageOfferLoaded;
export const getPropertyPageOffer = (state) => state[StoreNameSpace.DATA].propertyPageOffer;

export const getIsReviewsLoaded = (state) => state[StoreNameSpace.DATA].isReviewsLoaded;
export const getReviews = (state) => state[StoreNameSpace.DATA].reviews;

export const getIsNearbyOffersLoaded = (state) => state[StoreNameSpace.DATA].isNearbyOffersLoaded;
export const getNearbyOffers = (state) => state[StoreNameSpace.DATA].nearbyOffers;

export const getIsFavoriteOffersLoaded = (state) => state[StoreNameSpace.DATA].isFavoriteOffersLoaded;
export const getFavoriteOffers = (state) => state[StoreNameSpace.DATA].favoriteOffers;
