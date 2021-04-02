import {
  ActionType,
  disableRewiewForm,
  enableRewiewForm,
} from "./property-page";

describe(`Action creators work correctly`, () => {
  it(`Action creator for disable review form returns correct action`, () => {
    const expectedAction = {
      type: ActionType.DISABLE_REVIEW_FORM,
    };

    expect(disableRewiewForm()).toEqual(expectedAction);
  });

  it(`Action creator for enable review form returns correct action`, () => {
    const expectedAction = {
      type: ActionType.ENABLE_REVIEW_FORM,
    };

    expect(enableRewiewForm()).toEqual(expectedAction);
  });
});
