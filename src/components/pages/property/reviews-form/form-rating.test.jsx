import React from "react";
import {
  fireEvent,
  render,
} from "@testing-library/react";
import FormRating from "./form-rating";
import {
  RATINGS,
} from "../../../../const";

it(`Form rating callback works correctly`, () => {
  const onChange = jest.fn();

  const {
    getByTitle,
  } = render(<FormRating checkedRating={RATINGS[1].value} isDisabled={false} onChange={onChange} />);

  fireEvent.click(getByTitle(RATINGS[0].title));
  expect(onChange).toBeCalledWith(RATINGS[0].value);
});
