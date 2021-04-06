import React from "react";
import {
  render,
} from "@testing-library/react";
import PropertyGallery from "./property-gallery";
import {
  mockOffer,
} from "../../../mocks-for-test";

it(`Property gallery should render correctly`, () => {

  const {
    container,
  } = render(<PropertyGallery images={mockOffer.images} />);

  expect(container).toMatchSnapshot();
});
