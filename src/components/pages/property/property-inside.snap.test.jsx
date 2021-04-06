import React from "react";
import {
  render,
} from "@testing-library/react";
import PropertyInside from "./property-inside";
import {
  mockOffer,
} from "../../../mocks-for-test";

it(`Property inside should render correctly`, () => {

  const {
    container,
  } = render(<PropertyInside goods={mockOffer.goods} />);

  expect(container).toMatchSnapshot();
});
