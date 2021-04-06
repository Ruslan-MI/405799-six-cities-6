import React from "react";
import {
  render,
} from "@testing-library/react";
import CitiesPlaces from "./cities-places";
import {
  StoreNameSpace,
} from "../../../../const";
import Test, {
  mockDataInitialState,
  mockMainPageInitialState,
  mockOffers,
} from "../../../../mocks-for-test";

it(`Cities places should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: {
      ...mockMainPageInitialState,
      currentCity: mockOffers[0].city.name,
    },
    [StoreNameSpace.DATA]: {
      ...mockDataInitialState,
      offers: mockOffers,
    },
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <CitiesPlaces />
  </Test>);

  expect(container).toMatchSnapshot();
});
