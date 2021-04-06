import React from "react";
import {
  fireEvent,
  render,
} from "@testing-library/react";
import PlaceCard from "./place-card";
import Test, {
  mockOffer,
} from "../../mocks-for-test";

it(`Place card callbacks works correctly`, () => {
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();

  const {
    getByTestId,
  } = render(<Test>
    <PlaceCard offer={mockOffer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  </Test>);

  const placeCardElement = getByTestId(`place-card`);

  fireEvent.mouseEnter(placeCardElement);
  expect(onMouseEnter).toBeCalled();
  fireEvent.mouseLeave(placeCardElement);
  expect(onMouseLeave).toBeCalled();
});
