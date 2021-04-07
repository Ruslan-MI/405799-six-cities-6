import React from "react";
import {
  render,
} from "@testing-library/react";
import FavoritesList from "./favorites-list";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockOffers,
} from "../../../mocks-for-test";

it(`Favorites list should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: {
      ...mockDataInitialState,
      favoriteOffers: mockOffers,
    },
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <FavoritesList />
  </Test>);

  expect(container).toMatchSnapshot();
});
