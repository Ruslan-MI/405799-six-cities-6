import React from "react";
import {
  render,
} from "@testing-library/react";
import PlacesOptions from "./places-options";
import {
  StoreNameSpace,
} from "../../../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../../../mocks-for-test";

it(`Places options should render correctly`, () => {
  const onClick = jest.fn();

  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <PlacesOptions isPlacesOptionsOpened onClick={onClick} />
  </Test>);

  expect(container).toMatchSnapshot();
});
