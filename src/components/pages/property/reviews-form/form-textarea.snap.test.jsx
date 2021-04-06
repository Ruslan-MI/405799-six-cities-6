import React from "react";
import {
  render,
} from "@testing-library/react";
import FormTextarea from "./form-textarea";

it(`Form textarea should render correctly`, () => {
  const textareaMockValue = `Mock value`;

  const onChange = jest.fn();

  const {
    container,
  } = render(<FormTextarea value={textareaMockValue} isDisabled onChange={onChange} />);

  expect(container).toMatchSnapshot();
});
