import {
  ActionType,
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
} from "./data";
import {
  mockOffer,
  mockOffers,
  mockReviews,
} from "../../mocks-for-test";

describe(`Action creators work correctly`, () => {
  it(`Action creator for run offers loading returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RUN_OFFERS_LOADING,
    };

    expect(runOffersLoading()).toEqual(expectedAction);
  });

  it(`Action creator for loading offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers,
    };

    expect(loadOffers(mockOffers)).toEqual(expectedAction);
  });

  it(`Action creator for run property page offer loading returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RUN_PROPERTY_PAGE_OFFER_LOADING,
    };

    expect(runPropertyPageOfferLoading()).toEqual(expectedAction);
  });

  it(`Action creator for loading property page offer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROPERTY_PAGE_OFFER,
      payload: mockOffer,
    };

    expect(loadPropertyPageOffer(mockOffer)).toEqual(expectedAction);
  });

  it(`Action creator for run reviews loading returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RUN_REVIEWS_LOADING,
    };

    expect(runReviewsLoading()).toEqual(expectedAction);
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: mockReviews,
    };

    expect(loadReviews(mockReviews)).toEqual(expectedAction);
  });

  it(`Action creator for run nearby offers loading returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RUN_NEARBY_OFFERS_LOADING,
    };

    expect(runNearbyOffersLoading()).toEqual(expectedAction);
  });

  it(`Action creator for loading nearby offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: mockOffers,
    };

    expect(loadNearbyOffers(mockOffers)).toEqual(expectedAction);
  });

  it(`Action creator for run favorite offers loading returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RUN_FAVORITE_OFFERS_LOADING,
    };

    expect(runFavoriteOffersLoading()).toEqual(expectedAction);
  });

  it(`Action creator for loading favorite offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: mockOffers,
    };

    expect(loadFavoriteOffers(mockOffers)).toEqual(expectedAction);
  });

  it(`Action creator for update favorite status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE_STATUS,
      payload: mockOffer,
    };

    expect(updateFavoriteStatus(mockOffer)).toEqual(expectedAction);
  });
});
