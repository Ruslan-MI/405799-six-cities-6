import React from "react";
import {
  render,
} from "@testing-library/react";
import FavoritesPageContainer from "./favorites-page-container";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockDataInitialState,
  mockUserInitialState,
} from "../../../mocks-for-test";

it(`Favorites page container should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.DATA]: mockDataInitialState,
    [StoreNameSpace.USER]: mockUserInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <FavoritesPageContainer />
  </Test>);

  expect(container).toMatchSnapshot();
});
