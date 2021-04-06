import React from "react";
import {
  render,
} from "@testing-library/react";
import NotFoundPage from "./not-found-page";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockUserInitialState,
} from "../../../mocks-for-test";

const dataForStore = {
  [StoreNameSpace.USER]: mockUserInitialState,
};

it(`"Not found" page should render correctly`, () => {
  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <NotFoundPage />
  </Test>);

  expect(container).toMatchSnapshot();
});
