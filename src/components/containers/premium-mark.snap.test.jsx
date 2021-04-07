import React from "react";
import {
  render,
} from "@testing-library/react";
import PremiumMark from "./premium-mark";


it(`Premium mark should render correctly`, () => {
  const {
    container,
  } = render(<PremiumMark />);

  expect(container).toMatchSnapshot();
});
