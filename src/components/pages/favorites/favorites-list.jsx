import React from "react";
import {
  useSelector,
} from "react-redux";
import FavoritesLocationsItems from "./favorites-locations-items";
import {
  getFavoriteCities,
  appendIDForArrayItems,
} from "../../../utils/common";
import {
  StoreNameSpace,
} from "../../../const";

const FavoritesList = () => {
  const {
    favoriteOffers,
  } = useSelector((state) => state[StoreNameSpace.DATA]);

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {appendIDForArrayItems(getFavoriteCities(favoriteOffers)).map(({
          item,
          id,
        }) => <FavoritesLocationsItems key={id} city={item} favoriteOffers={favoriteOffers} />)}
      </ul>
    </>
  );
};

export default FavoritesList;
