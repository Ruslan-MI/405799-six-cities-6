import React from "react";
import {
  render,
} from "@testing-library/react";
import PropertyDescription from "./property-description";
import {
  mockOffer,
} from "../../../mocks-for-test";

it(`Property description should render correctly`, () => {

  const {
    container,
  } = render(<PropertyDescription description={mockOffer.description} />);

  expect(container).toMatchSnapshot();
});
