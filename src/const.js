export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  VERIFIED: `VERIFIED`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  NOT_FOUND: `/404`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  REVIEWS: `/comments`,
  NEARBY: `/nearby`,
  LOGOUT: `/logout`,
  FAVORITE: `/favorite`,
};

export const StoreNameSpace = {
  DATA: `DATA`,
  MAIN_PAGE: `MAIN_PAGE`,
  PLACE_CARD: `PLACE_CARD`,
  USER: `USER`,
  PROPERTY_PAGE: `PROPERTY_PAGE`,
};

export const RATINGS = [
  {
    value: 5,
    title: `perfect`,
  },
  {
    value: 4,
    title: `good`,
  },
  {
    value: 3,
    title: `not bad`,
  },
  {
    value: 2,
    title: `badly`,
  },
  {
    value: 1,
    title: `terribly`,
  }
];
