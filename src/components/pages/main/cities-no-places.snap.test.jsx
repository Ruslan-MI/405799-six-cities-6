import React from "react";
import {
  render,
} from "@testing-library/react";
import CitiesNoPlaces from "./cities-no-places";
import {
  StoreNameSpace,
} from "../../../const";
import Test, {
  mockMainPageInitialState,
} from "../../../mocks-for-test";

it(`"Cities no places" should render correctly`, () => {
  const dataForStore = {
    [StoreNameSpace.MAIN_PAGE]: mockMainPageInitialState,
  };

  const {
    container,
  } = render(<Test dataForStore={dataForStore}>
    <CitiesNoPlaces />
  </Test>);

  expect(container).toMatchSnapshot();
});
