import React from "react";
import {
  render,
} from "@testing-library/react";
import PlacesOption from "./places-option";
import {
  StoreNameSpace,
} from "../../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../../mocks-for-test";

it(`Places option should render correctly`, () => {
  const onClick = jest.fn();

  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <PlacesOption sortType={mockMainPageInitialState.currentSortType} onClick={onClick} />
  </Test>);

  expect(container).toMatchSnapshot();
});
