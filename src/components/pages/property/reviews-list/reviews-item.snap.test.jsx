import React from "react";
import {
  render,
} from "@testing-library/react";
import ReviewsItem from "./reviews-item";
import {
  mockReview,
} from "../../../../mocks-for-test";

it(`Reviews item should render correctly`, () => {
  const {
    container,
  } = render(<ReviewsItem review={mockReview} />);

  expect(container).toMatchSnapshot();
});
