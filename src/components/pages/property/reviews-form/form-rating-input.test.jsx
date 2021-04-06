import React from "react";
import {
  fireEvent,
  render,
} from "@testing-library/react";
import FormRatingInput from "./form-rating-input";
import {
  RATINGS,
} from "../../../../const";

it(`Form rating input callback works correctly`, () => {
  const onChange = jest.fn();

  const {
    getByTitle,
  } = render(<FormRatingInput rating={RATINGS[0]} checked={false} isDisabled={false} onChange={onChange} />);

  const placesOptionElement = getByTitle(RATINGS[0].title);

  fireEvent.click(placesOptionElement);
  expect(onChange).toBeCalledWith(RATINGS[0].value);
});
