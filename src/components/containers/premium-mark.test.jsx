import React from 'react';
import {
  render,
} from '@testing-library/react';
import PremiumMark from './premium-mark';


it(`Premium mark should render correctly`, () => {
  const {
    getByText,
  } = render(<PremiumMark />);

  const mainElement = getByText(`Premium`);

  expect(mainElement).toBeInTheDocument();
});
