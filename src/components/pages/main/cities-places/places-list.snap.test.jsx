import React from "react";
import {
  render,
} from "@testing-library/react";
import PlacesList from "./places-list";
import {
  StoreNameSpace,
} from "../../../../const";
import Test, {
  mockDataInitialState,
  mockMainPageInitialState,
  mockOffers,
} from "../../../../mocks-for-test";

it(`Places list should render correctly`, () => {
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
    <PlacesList />
  </Test>);

  expect(container).toMatchSnapshot();
});
