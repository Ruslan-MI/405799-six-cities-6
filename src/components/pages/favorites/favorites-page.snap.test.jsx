import React from "react";
import {
  render,
} from "@testing-library/react";
import {
  FavoritesPage,
} from "./favorites-page";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockOffers,
  mockUserInitialState,
} from "../../../mocks-for-test";

it(`Favorites page should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: {
      ...mockDataInitialState,
      favoriteOffers: mockOffers,
    },
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <FavoritesPage />
  </Test>);

  expect(container).toMatchSnapshot();
});
