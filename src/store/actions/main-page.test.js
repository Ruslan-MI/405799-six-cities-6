import {
  ActionType,
  changeCurrentCity,
  changeSortType,
} from "./main-page";
import {
  CITIES,
  SortType,
} from "../../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for change current city returns correct action`, () => {
    const mockCurrentCity = CITIES[0];
    const expectedAction = {
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: mockCurrentCity,
    };

    expect(changeCurrentCity(mockCurrentCity)).toEqual(expectedAction);
  });

  it(`Action creator for change sort type returns correct action`, () => {
    const mockSortType = SortType.POPULAR;
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: mockSortType,
    };

    expect(changeSortType(mockSortType)).toEqual(expectedAction);
  });
});
