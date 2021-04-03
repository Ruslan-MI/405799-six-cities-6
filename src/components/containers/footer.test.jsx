import React from 'react';
import {
  render,
} from '@testing-library/react';
import {
  Router,
} from 'react-router-dom';
import {
  createMemoryHistory,
} from 'history';
import Footer from './footer';


it(`Footer should render correctly`, () => {
  const history = createMemoryHistory();
  const {
    getByTestId,
  } = render(<Router history={history}>
    <Footer />
  </Router>);

  const footerLogoElement = getByTestId(`footer-logo`);

  expect(footerLogoElement).toBeInTheDocument();
});
