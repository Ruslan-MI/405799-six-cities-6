import React from "react";
import {
  render,
} from "@testing-library/react";
import PlacesSorting from "./places-sorting";
import {
  StoreNameSpace,
} from "../../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../../mocks-for-test";

it(`Places sorting should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <PlacesSorting />
  </Test>);

  expect(container).toMatchSnapshot();
});
