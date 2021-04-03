import React from 'react';
import {
  render,
} from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';


it(`Favorites empty should render correctly`, () => {
  const {
    getByText,
  } = render(<FavoritesEmpty />);

  const headingElement = getByText(`Favorites (empty)`);
  const favoritesStatusElement = getByText(`Nothing yet saved.`);
  const favoritesStatusDescriptionElement = getByText(`Save properties to narrow down search or plan your future trips.`);

  expect(headingElement).toBeInTheDocument();
  expect(favoritesStatusElement).toBeInTheDocument();
  expect(favoritesStatusDescriptionElement).toBeInTheDocument();
});
