import React from "react";
import {
  render,
} from "@testing-library/react";
import NearPlacesList from "./near-places-list";
import Test, {
  mockOffers,
} from "../../../../mocks-for-test";

it(`Near places list should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <NearPlacesList nearbyOffers={mockOffers} />
  </Test>);

  expect(container).toMatchSnapshot();
});
