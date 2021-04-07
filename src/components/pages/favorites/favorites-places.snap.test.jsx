import React from "react";
import {
  render,
} from "@testing-library/react";
import FavoritesPlaces from "./favorites-places";
import Test, {
  mockOffers,
} from "../../../mocks-for-test";

it(`Favorites places should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <FavoritesPlaces favoriteOffersInCity={mockOffers} />
  </Test>);

  expect(container).toMatchSnapshot();
});
