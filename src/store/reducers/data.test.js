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
} from "../actions/data";
import {
  reducer,
} from "./data";
import {
  mockOffer,
  mockOffers,
  mockReviews,
} from "../../mocks-for-test";

const mockInitialState = {
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

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(mockInitialState);
  });

  it(`Reducer should change offers loaded flag to "false"`, () => {
    expect(reducer(mockInitialState, runOffersLoading()))
      .toEqual({
        ...mockInitialState,
        isOffersLoaded: false,
      });

    expect(reducer({
      ...mockInitialState,
      isOffersLoaded: true,
    }, runOffersLoading()))
      .toEqual({
        ...mockInitialState,
        isOffersLoaded: false,
      });
  });

  it(`Reducer should change offers in state to loaded offers
  and change offers loaded flag to "true"`, () => {
    expect(reducer(mockInitialState, loadOffers(mockOffers))).toEqual({
      ...mockInitialState,
      offers: mockOffers,
      isOffersLoaded: true,
    });

    expect(reducer({
      ...mockInitialState,
      offers: mockOffers,
    }, loadOffers([]))).toEqual({
      ...mockInitialState,
      isOffersLoaded: true,
    });
  });

  it(`Reducer should change property page offer loaded flag to "false"`, () => {
    expect(reducer(mockInitialState, runPropertyPageOfferLoading()))
      .toEqual({
        ...mockInitialState,
        isPropertyPageOfferLoaded: false,
      });

    expect(reducer({
      ...mockInitialState,
      isPropertyPageOfferLoaded: true,
    }, runPropertyPageOfferLoading()))
      .toEqual({
        ...mockInitialState,
        isPropertyPageOfferLoaded: false,
      });
  });

  it(`Reducer should change property page offer in state to loaded offer
  and change property page offer loaded flag to "true"`, () => {
    expect(reducer({
      ...mockInitialState,
      isPropertyPageOfferLoaded: false,
    }, loadPropertyPageOffer(mockOffer))).toEqual({
      ...mockInitialState,
      propertyPageOffer: mockOffer,
      isPropertyPageOfferLoaded: true,
    });
  });

  it(`Reducer should change reviews loaded flag to "false"`, () => {
    expect(reducer(mockInitialState, runReviewsLoading()))
      .toEqual({
        ...mockInitialState,
        isReviewsLoaded: false,
      });

    expect(reducer({
      ...mockInitialState,
      isReviewsLoaded: true,
    }, runReviewsLoading()))
      .toEqual({
        ...mockInitialState,
        isReviewsLoaded: false,
      });
  });

  it(`Reducer should change offers in state to loaded reviews
  and change reviews loaded flag to "true"`, () => {
    expect(reducer(mockInitialState, loadReviews(mockReviews))).toEqual({
      ...mockInitialState,
      reviews: mockReviews,
      isReviewsLoaded: true,
    });

    expect(reducer({
      ...mockInitialState,
      reviews: mockReviews,
    }, loadReviews([]))).toEqual({
      ...mockInitialState,
      isReviewsLoaded: true,
    });
  });

  it(`Reducer should change nearby offers loaded flag to "false"`, () => {
    expect(reducer(mockInitialState, runNearbyOffersLoading()))
      .toEqual({
        ...mockInitialState,
        isNearbyOffersLoaded: false,
      });

    expect(reducer({
      ...mockInitialState,
      isNearbyOffersLoaded: true,
    }, runNearbyOffersLoading()))
      .toEqual({
        ...mockInitialState,
        isNearbyOffersLoaded: false,
      });
  });

  it(`Reducer should change nearby offers in state to loaded offers
  and change nearby offers loaded flag to "true"`, () => {
    expect(reducer(mockInitialState, loadNearbyOffers(mockOffers))).toEqual({
      ...mockInitialState,
      nearbyOffers: mockOffers,
      isNearbyOffersLoaded: true,
    });

    expect(reducer({
      ...mockInitialState,
      nearbyOffers: mockOffers,
    }, loadNearbyOffers([]))).toEqual({
      ...mockInitialState,
      isNearbyOffersLoaded: true,
    });
  });

  it(`Reducer should change favorite offers loaded flag to "false"`, () => {
    expect(reducer(mockInitialState, runFavoriteOffersLoading()))
      .toEqual({
        ...mockInitialState,
        isFavoriteOffersLoaded: false,
      });

    expect(reducer({
      ...mockInitialState,
      isFavoriteOffersLoaded: true,
    }, runFavoriteOffersLoading()))
      .toEqual({
        ...mockInitialState,
        isFavoriteOffersLoaded: false,
      });
  });

  it(`Reducer should change favorite offers in state to loaded offers
  and change favorite offers loaded flag to "true"`, () => {
    expect(reducer(mockInitialState, loadFavoriteOffers(mockOffers))).toEqual({
      ...mockInitialState,
      favoriteOffers: mockOffers,
      isFavoriteOffersLoaded: true,
    });

    expect(reducer({
      ...mockInitialState,
      favoriteOffers: mockOffers,
    }, loadFavoriteOffers([]))).toEqual({
      ...mockInitialState,
      isFavoriteOffersLoaded: true,
    });
  });

  it(`Reducer should change offer, added or removed from favorites,
  in all offers states`, () => {
    expect(reducer({
      ...mockInitialState,
      offers: mockOffers,
      propertyPageOffer: mockOffer,
      nearbyOffers: mockOffers,
      favoriteOffers: mockOffers,
    }, updateFavoriteStatus({
      ...mockOffer,
      isFavorite: true,
    }))).toEqual({
      ...mockInitialState,
      offers: [
        {
          ...mockOffer,
          isFavorite: true,
        },
      ],
      propertyPageOffer: {
        ...mockOffer,
        isFavorite: true,
      },
      nearbyOffers: [
        {
          ...mockOffer,
          isFavorite: true,
        },
      ],
      favoriteOffers: [
        {
          ...mockOffer,
          isFavorite: true,
        },
      ],
    });

    expect(reducer({
      ...mockInitialState,
      offers: [
        {
          ...mockOffer,
          isFavorite: true,
        },
      ],
      propertyPageOffer: {
        ...mockOffer,
        isFavorite: true,
      },
      nearbyOffers: [
        {
          ...mockOffer,
          isFavorite: true,
        },
      ],
      favoriteOffers: [
        {
          ...mockOffer,
          isFavorite: true,
        },
      ],
    }, updateFavoriteStatus({
      ...mockOffer,
      isFavorite: false,
    }))).toEqual({
      ...mockInitialState,
      offers: [
        {
          ...mockOffer,
          isFavorite: false,
        },
      ],
      propertyPageOffer: {
        ...mockOffer,
        isFavorite: false,
      },
      nearbyOffers: [
        {
          ...mockOffer,
          isFavorite: false,
        },
      ],
      favoriteOffers: [
        {
          ...mockOffer,
          isFavorite: false,
        },
      ],
    });
  });
});
