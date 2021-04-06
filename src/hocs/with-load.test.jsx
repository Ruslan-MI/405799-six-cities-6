import React from "react";
import {
  render,
} from "@testing-library/react";
import withLoad from "./with-load";

describe(`Test HOC "withLoad"`, () => {
  it(`Base component should be correct rendering when use with HOC`, () => {
    const BaseComponent = () => <h1>withLoad</h1>;
    const BaseComponentWrapped = withLoad(BaseComponent);
    const {
      getByText,
    } = render(<BaseComponentWrapped isDataLoaded />);
    expect(getByText(`withLoad`)).toBeInTheDocument();
  });

  it(`Loading screen should be correct rendering when data not loaded`, () => {
    const BaseComponent = () => <h1>withLoad</h1>;
    const BaseComponentWrapped = withLoad(BaseComponent);
    const {
      getByText,
    } = render(<BaseComponentWrapped />);
    expect(getByText(`Loading...`)).toBeInTheDocument();
  });
});
