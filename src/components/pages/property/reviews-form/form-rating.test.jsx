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
  } = render(<FormRating checkedRating={RATINGS[0]} isDisabled={false} onChange={onChange} />);

  const placesOptionElement = getByTitle(RATINGS[0].title);

  fireEvent.click(placesOptionElement);
  expect(onChange).toBeCalledWith(RATINGS[0].value);
});
