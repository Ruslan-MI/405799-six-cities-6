import React from "react";
import {
  render,
} from "@testing-library/react";
import * as redux from "react-redux";
import App from "./app";
import {
  AppRoute,
  StoreNameSpace,
} from "../const";
import Test, {
  mockDataInitialState,
  mockUserInitialState,
} from "../mocks-for-test";

describe(`Test routing`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: mockDataInitialState,
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render main page when user navigate to "/" url`, () => {
    const {
      container,
    } = render(<Test dataForStore={dataForStore}>
      <App />
    </Test>);

    expect(container).toMatchSnapshot();
  });

  it(`Render login page when user navigate to "/login" url`, () => {
    const {
      container,
    } = render(<Test dataForStore={dataForStore} pushURL={AppRoute.LOGIN}>
      <App />
    </Test>);

    expect(container).toMatchSnapshot();
  });

  it(`Render "Not found" page when user navigate to non-existent route`, () => {
    const {
      container,
    } = render(<Test dataForStore={dataForStore} pushURL={`/non-existent-route`}>
      <App />
    </Test>);

    expect(container).toMatchSnapshot();
  });
});
