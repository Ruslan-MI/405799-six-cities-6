import React from "react";
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import FavoritesList from "./favorites-list";
import withLoad from "../../hocs/with-load";

const FavoritesPage = () => {
  return (
    <div className="page">
      <Header isFavoritesPage />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesList />
          </section>
        </div >
      </main >
      <Footer />
    </div >
  );
};

export default withLoad(FavoritesPage);
