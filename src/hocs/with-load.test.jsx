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
      queryByText,
    } = render(<BaseComponentWrapped isDataLoaded />);

    expect(getByText(`withLoad`)).toBeInTheDocument();
    expect(queryByText(`Loading...`)).not.toBeInTheDocument();
  });

  it(`Loading screen should be correct rendering when data not loaded`, () => {
    const BaseComponent = () => <h1>withLoad</h1>;
    const BaseComponentWrapped = withLoad(BaseComponent);
    const {
      getByText,
      queryByText,
    } = render(<BaseComponentWrapped />);

    expect(getByText(`Loading...`)).toBeInTheDocument();
    expect(queryByText(`withLoad`)).not.toBeInTheDocument();
  });
});
