import React from "react";
import {
  render,
} from "@testing-library/react";
import {
  PropertyPage,
} from "./property-page";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockOffer,
  mockUserInitialState,
} from "../../../mocks-for-test";

it(`Property page should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: {
      ...mockDataInitialState,
      propertyPageOffer: mockOffer,
    },
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <PropertyPage />
  </Test>);

  expect(container).toMatchSnapshot();
});
