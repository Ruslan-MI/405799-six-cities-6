import React from "react";
import {
  render,
} from "@testing-library/react";
import PropertyPageContainer from "./property-page-container";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockUserInitialState,
  mockServerOffer,
} from "../../../mocks-for-test";

it(`Property page container should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: mockDataInitialState,
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <PropertyPageContainer offerID={mockServerOffer.id.toString()} />
  </Test>);

  expect(container).toMatchSnapshot();
});
