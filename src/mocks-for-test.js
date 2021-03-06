import React from "react";
import PropTypes from "prop-types";
import configureStore from "redux-mock-store";
import {
  Provider,
} from "react-redux";
import {
  Router,
} from "react-router-dom";
import {
  createMemoryHistory,
} from "history";
import {
  adaptOfferToClient,
  adaptReviewToClient,
  adaptAuthInfoToClient,
} from "./utils/api";
import {
  CITIES,
  SortType,
  AuthorizationStatus,
} from "./const";

export const mockServerOffer = {
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatar_url": `img/1.png`,
    "id": 3,
    "is_pro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`img/1.png`, `img/2.png`],
  "is_favorite": false,
  "is_premium": true,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
};

export const mockServerOffers = [
  mockServerOffer,
];

export const mockOffer = adaptOfferToClient(mockServerOffer);
export const mockOffers = [
  mockOffer,
];

export const mockServerReview = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1,
  "rating": 4,
  "user": {
    "avatar_url": `img/1.png`,
    "id": 4,
    "is_pro": false,
    "name": `Max`
  }
};

export const mockServerReviews = [
  mockServerReview,
];

export const mockReview = adaptReviewToClient(mockServerReview);
export const mockReviews = [
  mockReview,
];

export const mockServerAuthInfo = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

export const mockAuthInfo = adaptAuthInfoToClient(mockServerAuthInfo);

export const mockDataInitialState = {
  isOffersLoaded: false,
  offers: [],
  isPropertyPageOfferLoaded: false,
  propertyPageOffer: null,
  isReviewsLoaded: false,
  reviews: [],
  isNearbyOffersLoaded: false,
  nearbyOffers: [],
  isFavoriteOffersLoaded: false,
  favoriteOffers: [],
};

export const mockMainPageInitialState = {
  currentCity: CITIES[0],
  currentSortType: SortType.POPULAR,
};

export const mockPlaceCardInitialState = {
  activeOfferID: 0,
};

export const mockPropertyPageInitialState = {
  isReviewFormDisabled: false,
};

export const mockUserInitialState = {
  authorizationStatus: AuthorizationStatus.VERIFIED,
  userEmail: ``,
  userAvatar: ``,
};

const Test = ({
  children,
  dataForStore = {},
  pushURL = null,
}) => {
  const history = createMemoryHistory();
  if (pushURL) {
    history.push(pushURL);
  }

  const store = configureStore({})(dataForStore);

  store.dispatch = () => { };

  return (
    <Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  );
};

Test.propTypes = {
  children: PropTypes.element.isRequired,
  dataForStore: PropTypes.object,
  pushURL: PropTypes.string,
};

export default Test;
