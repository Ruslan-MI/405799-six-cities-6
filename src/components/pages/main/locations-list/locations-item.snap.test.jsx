import React from "react";
import {
  render,
} from "@testing-library/react";
import LocationsItem from "./locations-item";
import {
  StoreNameSpace,
  CITIES,
} from "../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../mocks-for-test";

it(`Locations item should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <LocationsItem city={CITIES[0]} />
  </Test>);

  expect(container).toMatchSnapshot();
});
