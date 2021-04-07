import React from "react";
import {
  render,
} from "@testing-library/react";
import Header from "./header";
import {
  AuthorizationStatus,
  StoreNameSpace,
} from "../../const";
import Test, {
  mockUserInitialState,
  mockAuthInfo,
} from "../../mocks-for-test";

describe(`Header should render correctly`, () => {
  it(`Header without authorization should render correctly`, () => {
    const dataForStore = {
      [StoreNameSpace.USER]: mockUserInitialState,
    };

    const {
      container,
    } = render(<Test dataForStore={dataForStore}>
      <Header />
    </Test>);

    expect(container).toMatchSnapshot();
  });

  it(`Header with authorization should render correctly`, () => {
    const dataForStore = {
      [StoreNameSpace.USER]: {
        ...mockUserInitialState,
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: mockAuthInfo.email,
      },
    };

    const {
      container,
    } = render(<Test dataForStore={dataForStore}>
      <Header />
    </Test>);

    expect(container).toMatchSnapshot();
  });
});
