import React from "react";
import {
  fireEvent,
  render,
} from "@testing-library/react";
import PlacesOptions from "./places-options";
import {
  SortType,
  StoreNameSpace,
} from "../../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../../mocks-for-test";

it(`Places options callback works correctly`, () => {
  const onClick = jest.fn();

  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
  };

  const {
    getByText,
  } = render(<Test dataForStore={dataForStore}>
    <PlacesOptions isPlacesOptionsOpened onClick={onClick} />
  </Test>);

  fireEvent.click(getByText(SortType.PRICE_HIGH_TO_LOW));
  expect(onClick).toBeCalled();
});
