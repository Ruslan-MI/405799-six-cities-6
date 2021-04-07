import {
  changeCurrentCity,
  changeSortType,
} from "../actions/main-page";
import {
  reducer,
} from "./main-page";
import {
  CITIES,
  SortType,
} from "../../const";
import {
  mockMainPageInitialState as mockInitialState,
} from "../../mocks-for-test";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(mockInitialState);
  });

  it(`Reducer should change current city to recieved value`, () => {
    expect(reducer(mockInitialState, changeCurrentCity(CITIES[1])))
      .toEqual({
        ...mockInitialState,
        currentCity: CITIES[1],
      });
  });

  it(`Reducer should change current sort type to recieved value`, () => {
    expect(reducer(mockInitialState, changeSortType(SortType.PRICE_HIGH_TO_LOW)))
      .toEqual({
        ...mockInitialState,
        currentSortType: SortType.PRICE_HIGH_TO_LOW,
      });
  });
});
