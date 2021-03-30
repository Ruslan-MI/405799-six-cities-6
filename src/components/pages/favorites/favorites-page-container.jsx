import React, {
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import FavoritesPage from "./favorites-page";
import {
  fetchFavoriteOffers,
} from "../../../store/api-actions";
import {
  StoreNameSpace,
} from "../../../const";

const FavoritesPageContainer = () => {
  const {
    isFavoriteOffersLoaded,
  } = useSelector((state) => state[StoreNameSpace.DATA]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, []);

  return <FavoritesPage isDataLoaded={isFavoriteOffersLoaded} />;
};

export default FavoritesPageContainer;
