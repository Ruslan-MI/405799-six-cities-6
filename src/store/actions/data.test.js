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

const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `img/1.png`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

const mockOffers = [
  mockOffer,
];

const mockReview = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
};

const mockReviews = [
  mockReview,
];

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
