import React from "react";
import {
  render,
} from "@testing-library/react";
import PropertyMap from "./property-map";
import {
  mockOffers,
} from "../../../mocks-for-test";

it(`Property map should render correctly`, () => {

  const {
    container,
  } = render(<PropertyMap nearbyOffers={mockOffers} />);

  expect(container).toMatchSnapshot();
});
