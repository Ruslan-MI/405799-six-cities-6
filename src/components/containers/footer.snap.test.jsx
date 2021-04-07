import React from "react";
import {
  render,
} from "@testing-library/react";
import Footer from "./footer";
import Test from "../../mocks-for-test";


it(`Footer should render correctly`, () => {
  const {
    container,
  } = render(<Test>
    <Footer />
  </Test>);

  expect(container).toMatchSnapshot();
});
