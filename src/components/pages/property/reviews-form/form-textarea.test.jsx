import React from "react";
import {
  render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormTextarea from "./form-textarea";

it(`Form textarea callback works correctly`, () => {
  const textareaMockInput = `M`;

  const onChange = jest.fn();

  const {
    getByPlaceholderText,
  } = render(<FormTextarea value={``} isDisabled={false} onChange={onChange} />);

  userEvent.type(getByPlaceholderText(/Tell how was your stay/i), textareaMockInput);
  expect(onChange).toBeCalledWith(textareaMockInput);
});
