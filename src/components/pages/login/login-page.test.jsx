import React from "react";
import {
  render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./login-page";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockUserInitialState,
  mockAuthInfo,
} from "../../../mocks-for-test";

const dataForStore = {
  [StoreNameSpace.USER]: mockUserInitialState,
};

it(`Login page inputs works correctly`, () => {
  const mockPassword = `12345678`;
  const {
    getByPlaceholderText,
    getByDisplayValue,
  } = render(<Test dataForStore={dataForStore}>
    <LoginPage />
  </Test>);

  userEvent.type(getByPlaceholderText(`Email`), mockAuthInfo.email);
  userEvent.type(getByPlaceholderText(`Password`), mockPassword);

  expect(getByDisplayValue(mockAuthInfo.email)).toBeInTheDocument();
  expect(getByDisplayValue(mockPassword)).toBeInTheDocument();
});
