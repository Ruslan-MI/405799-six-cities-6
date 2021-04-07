import React from "react";
import {
  render,
} from "@testing-library/react";
import ReviewsList from "./reviews-list";
import {
  mockReviews,
} from "../../../../mocks-for-test";

it(`Reviews list should render correctly`, () => {
  const {
    container,
  } = render(<ReviewsList reviews={mockReviews} />);

  expect(container).toMatchSnapshot();
});
