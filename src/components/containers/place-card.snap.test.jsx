import React from "react";
import {
  render,
} from "@testing-library/react";
import PlaceCard from "./place-card";
import Test, {
  mockOffer,
} from "../../mocks-for-test";

it(`Place card should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <PlaceCard offer={mockOffer} />
  </Test>);

  expect(container).toMatchSnapshot();
});
