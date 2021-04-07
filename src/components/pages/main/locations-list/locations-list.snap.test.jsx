import React from "react";
import {
  render,
} from "@testing-library/react";
import LocationsList from "./locations-list";
import {
  StoreNameSpace,
} from "../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../mocks-for-test";

it(`Locations list should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <LocationsList />
  </Test>);

  expect(container).toMatchSnapshot();
});
