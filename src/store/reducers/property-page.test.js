import {
  disableRewiewForm,
  enableRewiewForm,
} from "../actions/property-page";
import {
  reducer,
} from "./property-page";

const mockInitialState = {
  isReviewFormDisabled: false,
};

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(mockInitialState);
  });

  it(`Reducer should change review form disabled flag to "true"`, () => {
    expect(reducer(mockInitialState, disableRewiewForm()))
      .toEqual({
        ...mockInitialState,
        isReviewFormDisabled: true,
      });
  });

  it(`Reducer should change review form disabled flag to "false"`, () => {
    expect(reducer({
      ...mockInitialState,
      isReviewFormDisabled: true,
    }, enableRewiewForm()))
      .toEqual({
        ...mockInitialState,
        isReviewFormDisabled: false,
      });
  });
});
