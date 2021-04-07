import React from "react";
import {
  render,
} from "@testing-library/react";
import FavoritesLocationsItems from "./favorites-locations-items";
import Test, {
  mockOffers,
} from "../../../mocks-for-test";

it(`Favorites locations items should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <FavoritesLocationsItems city={mockOffers[0].city.name} favoriteOffers={mockOffers} />
  </Test>);

  expect(container).toMatchSnapshot();
});
