import {
  NameSpace,
} from "../reducers/root-reducer";

export const getIsOffersLoaded = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getOffers = (state) => state[NameSpace.DATA].offers;

export const getIsPropertyPageOfferLoaded = (state) => state[NameSpace.DATA].isPropertyPageOfferLoaded;
export const getPropertyPageOffer = (state) => state[NameSpace.DATA].propertyPageOffer;

export const getIsReviewsLoaded = (state) => state[NameSpace.DATA].isReviewsLoaded;
export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getIsNearbyOffersLoaded = (state) => state[NameSpace.DATA].isNearbyOffersLoaded;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;

export const getIsFavoriteOffersLoaded = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
