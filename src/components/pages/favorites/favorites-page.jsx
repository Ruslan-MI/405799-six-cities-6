import React from "react";
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import FavoritesList from "./favorites-list";

const FavoritesPage = () => {
  return (
    <div className="page">
      <Header />
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

export default FavoritesPage;
