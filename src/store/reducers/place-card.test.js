import {
  changeActiveOfferID,
  resetActiveOfferID,
} from "../actions/place-card";
import {
  reducer,
} from "./place-card";

const mockInitialState = {
  activeOfferID: 0,
};

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(mockInitialState);
  });

  it(`Reducer should change active offer ID to recieved value`, () => {
    expect(reducer(mockInitialState, changeActiveOfferID(1)))
      .toEqual({
        ...mockInitialState,
        activeOfferID: 1,
      });
  });

  it(`Reducer should change active offer ID to initial value`, () => {
    expect(reducer({
      ...mockInitialState,
      activeOfferID: 1,
    }, resetActiveOfferID()))
      .toEqual(mockInitialState);
  });
});
