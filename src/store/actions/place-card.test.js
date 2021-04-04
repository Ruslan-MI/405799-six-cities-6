import {
  ActionType,
  changeActiveOfferID,
  resetActiveOfferID,
} from "./place-card";

describe(`Action creators work correctly`, () => {
  it(`Action creator for change active offer ID returns correct action`, () => {
    const mockOfferID = 1;
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: mockOfferID,
    };

    expect(changeActiveOfferID(mockOfferID)).toEqual(expectedAction);
  });

  it(`Action creator for reset offer ID returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_ACTIVE_OFFER_ID,
    };

    expect(resetActiveOfferID()).toEqual(expectedAction);
  });
});
