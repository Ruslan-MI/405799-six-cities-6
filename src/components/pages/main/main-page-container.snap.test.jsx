import React from "react";
import {
  render,
} from "@testing-library/react";
import MainPageContainer from "./main-page-container";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockMainPageInitialState,
  mockPlaceCardInitialState,
  mockUserInitialState,
} from "../../../mocks-for-test";

it(`Main page container should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
    [StoreNameSpace.DATA]: mockDataInitialState,
    [StoreNameSpace.PLACE_CARD]: mockPlaceCardInitialState,
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <MainPageContainer />
  </Test>);

  expect(container).toMatchSnapshot();
});
