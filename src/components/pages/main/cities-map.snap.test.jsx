import React from "react";
import {
  render,
} from "@testing-library/react";
import CitiesMap from "./cities-map";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockMainPageInitialState,
  mockOffers,
  mockPlaceCardInitialState,
} from "../../../mocks-for-test";

it(`Cities map should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: {
      ...mockMainPageInitialState,
      currentCity: mockOffers[0].city.name,
    },
    [StoreNameSpace.DATA]: {
      ...mockDataInitialState,
      offers: mockOffers,
    },
    [StoreNameSpace.PLACE_CARD]: {
      ...mockPlaceCardInitialState,
      activeOfferID: mockOffers[0].id,
    },
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <CitiesMap />
  </Test>);

  expect(container).toMatchSnapshot();
});
