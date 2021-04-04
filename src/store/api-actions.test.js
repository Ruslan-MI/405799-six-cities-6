import MockAdapter from "axios-mock-adapter";
import {
  createAPI,
} from "../services/api";
import {
  fetchOffers,
  fetchPropertyPageOffer,
  fetchReviews,
  sendReview,
  fetchNearbyOffers,
  fetchFavoriteOffers,
  toggleFavoriteStatus,
  checkAuth,
  login,
  logout,
} from "./api-actions";
import {
  runOffersLoading,
  loadOffers,
  runPropertyPageOfferLoading,
  loadPropertyPageOffer,
  runReviewsLoading,
  loadReviews,
  runNearbyOffersLoading,
  loadNearbyOffers,
  runFavoriteOffersLoading,
  loadFavoriteOffers,
  updateFavoriteStatus,
} from "./actions/data";
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
} from "../const";
import {
  enableRewiewForm,
} from "./actions/property-page";
import {
  changeUserData,
  redirectToRoute,
  requireAuthorization,
} from "./actions/user";
import {
  mockServerOffer,
  mockOffer,
  mockServerOffers,
  mockOffers,
  mockServerReviews,
  mockReviews,
  mockServerAuthInfo,
  mockAuthInfo,
} from "../mocks-for-test";

const api = createAPI(() => { }, () => { });
const offerID = 1;
const rating = 5;
const comment = ``;

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, mockServerOffers);

    return fetchOffers()(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, runOffersLoading());
        expect(dispatch).toHaveBeenNthCalledWith(2, loadOffers(mockOffers));
      });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerID}`)
      .reply(200, mockServerOffer);

    return fetchPropertyPageOffer(offerID)(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, runPropertyPageOfferLoading());
        expect(dispatch).toHaveBeenNthCalledWith(2, loadPropertyPageOffer(mockOffer));
      });
  });

  it(`Should make a correct API call to /comments/:hotel_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${offerID}`)
      .reply(200, mockServerReviews);

    return fetchReviews(offerID)(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, runReviewsLoading());
        expect(dispatch).toHaveBeenNthCalledWith(2, loadReviews(mockReviews));
      });
  });

  it(`Should make a correct API post to /comments/:hotel_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${offerID}`)
      .reply(200, mockServerReviews);

    return sendReview({
      offerID,
      rating,
      review: comment,
    })(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadReviews(mockReviews));
        expect(dispatch).toHaveBeenNthCalledWith(2, enableRewiewForm());
      });
  });

  it(`Should make a correct API post to /comments/:hotel_id with error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${offerID}`)
      .reply(401);

    return sendReview({
      offerID,
      rating,
      review: comment,
    })(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, enableRewiewForm());
      });
  });

  it(`Should make a correct API call to /hotels/:hotel_id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerID}${APIRoute.NEARBY}`)
      .reply(200, mockServerOffers);

    return fetchNearbyOffers(offerID)(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, runNearbyOffersLoading());
        expect(dispatch).toHaveBeenNthCalledWith(2, loadNearbyOffers(mockOffers));
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, mockServerOffers);

    return fetchFavoriteOffers()(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, runFavoriteOffersLoading());
        expect(dispatch).toHaveBeenNthCalledWith(2, loadFavoriteOffers(mockOffers));
      });
  });

  it(`Should make a correct API post to /favorite/:hotel_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const isFavorite = true;
    const favoriteRemoveCommand = 0;

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${offerID}/${favoriteRemoveCommand}`)
      .reply(200, mockServerOffer);

    return toggleFavoriteStatus({
      id: offerID,
      isFavorite,
    })(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, updateFavoriteStatus(mockOffer));
      });
  });

  it(`Should make a correct API post to /favorite/:hotel_id/:status with no authorization error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const isFavorite = false;
    const favoriteAddCommand = 1;

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${offerID}/${favoriteAddCommand}`)
      .reply(401);

    return toggleFavoriteStatus({
      id: offerID,
      isFavorite,
    })(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, redirectToRoute(AppRoute.LOGIN));
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, mockServerAuthInfo);

    return checkAuth()(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, changeUserData(mockAuthInfo));
        expect(dispatch).toHaveBeenNthCalledWith(2, requireAuthorization(AuthorizationStatus.AUTH));
      });
  });

  it(`Should make a correct API post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const email = ``;
    const password = ``;

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, mockServerAuthInfo);

    return login({
      email,
      password,
    })(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, changeUserData(mockAuthInfo));
        expect(dispatch).toHaveBeenNthCalledWith(2, requireAuthorization(AuthorizationStatus.AUTH));
        expect(dispatch).toHaveBeenNthCalledWith(3, redirectToRoute(AppRoute.FAVORITES));
      });
  });

  it(`Should make a correct API call to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.LOGOUT)
      .reply(200);

    return logout()(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  });
});
