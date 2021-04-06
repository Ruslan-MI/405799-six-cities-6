import React from "react";
import {
  render,
} from "@testing-library/react";
import FormRating from "./form-rating";
import {
  RATINGS,
} from "../../../../const";

it(`Form rating should render correctly`, () => {
  const onChange = jest.fn();

  const {
    container,
  } = render(<FormRating checkedRating={RATINGS[0]} isDisabled onChange={onChange} />);

  expect(container).toMatchSnapshot();
});
