import React from "react";
import {
  render,
} from "@testing-library/react";
import Map from "./map";
import Test, {
  mockOffers,
  mockPlaceCardInitialState,
  mockMainPageInitialState,
} from "../../mocks-for-test";

it(`Map should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <Map offers={mockOffers} activeOfferID={mockPlaceCardInitialState.activeOfferID}
      currentCity={mockMainPageInitialState.currentCity} />
  </Test>);

  expect(container).toMatchSnapshot();
});
