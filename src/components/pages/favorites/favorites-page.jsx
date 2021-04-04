import React from "react";
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import FavoritesList from "./favorites-list";
import FavoritesEmpty from "./favorites-empty";
import withLoad from "../../../hocs/with-load";
import {
  useSelector,
} from "react-redux";
import {
  StoreNameSpace,
} from "../../../const";

const FavoritesPage = () => {
  const {
    favoriteOffers,
  } = useSelector((state) => state[StoreNameSpace.DATA]);

  const isFavoriteOffers = favoriteOffers.length > 0;

  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites ${isFavoriteOffers ? `` : `page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isFavoriteOffers ? `` : `favorites--empty`}`}>
            {isFavoriteOffers ? <FavoritesList /> : <FavoritesEmpty />}
          </section>
        </div >
      </main >
      <Footer />
    </div >
  );
};

export default withLoad(FavoritesPage);
