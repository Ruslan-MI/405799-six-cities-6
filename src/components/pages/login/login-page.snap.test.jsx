import React from "react";
import {
  render,
} from "@testing-library/react";
import LoginPage from "./login-page";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockUserInitialState,
} from "../../../mocks-for-test";

const dataForStore = {
  [StoreNameSpace.USER]: mockUserInitialState,
};

it(`Login page should render correctly`, () => {
  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <LoginPage />
  </Test>);

  expect(container).toMatchSnapshot();
});
