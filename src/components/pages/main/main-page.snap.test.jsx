import React from "react";
import {
  render,
} from "@testing-library/react";
import {
  MainPage,
} from "./main-page";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockMainPageInitialState,
  mockOffers,
  mockPlaceCardInitialState,
  mockUserInitialState,
} from "../../../mocks-for-test";

it(`Main page should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: {
      ...mockMainPageInitialState,
      currentCity: mockOffers[0].city.name,
    },
    [StoreNameSpace.DATA]: {
      ...mockDataInitialState,
      offers: mockOffers,
    },
    [StoreNameSpace.PLACE_CARD]: mockPlaceCardInitialState,
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <MainPage />
  </Test>);

  expect(container).toMatchSnapshot();
});
