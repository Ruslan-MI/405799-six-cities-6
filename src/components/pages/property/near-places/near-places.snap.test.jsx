import React from "react";
import {
  render,
} from "@testing-library/react";
import NearPlaces from "./near-places";
import Test, {
  mockOffers,
} from "../../../../mocks-for-test";

it(`Near places should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <NearPlaces nearbyOffers={mockOffers} />
  </Test>);

  expect(container).toMatchSnapshot();
});
