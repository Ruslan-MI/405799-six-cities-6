import React from "react";
import {
  render,
} from "@testing-library/react";
import ReviewsForm from "./reviews-form";
import {
  StoreNameSpace,
} from "../../../../const";
import Test, {
  mockDataInitialState,
  mockOffer,
  mockPropertyPageInitialState,
} from "../../../../mocks-for-test";

it(`Reviews form should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: mockDataInitialState,
    [StoreNameSpace.PROPERTY_PAGE]: mockPropertyPageInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <ReviewsForm offerID={mockOffer.id} />
  </Test>);

  expect(container).toMatchSnapshot();
});
