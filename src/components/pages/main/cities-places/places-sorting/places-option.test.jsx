import React from "react";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import PlacesOption from "./places-option";
import {
  SortType,
  StoreNameSpace,
} from "../../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../../mocks-for-test";

it(`Places option callback works correctly`, () => {
  const onClick = jest.fn();

  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
  };

  const {
    getByText,
  } = render(<Test dataForStore={dataForStore}>
    <PlacesOption sortType={SortType.PRICE_HIGH_TO_LOW} onClick={onClick} />
  </Test>);

  const placesOptionElement = getByText(SortType.PRICE_HIGH_TO_LOW);

  fireEvent.click(placesOptionElement);
  expect(onClick).toBeCalled();
});
