import React from "react";
import {
  render,
} from "@testing-library/react";
import FormRatingInput from "./form-rating-input";
import {
  RATINGS,
} from "../../../../const";

it(`Form rating input should render correctly`, () => {
  const onChange = jest.fn();

  const {
    container,
  } = render(<FormRatingInput rating={RATINGS[0]} checked isDisabled onChange={onChange} />);

  expect(container).toMatchSnapshot();
});
