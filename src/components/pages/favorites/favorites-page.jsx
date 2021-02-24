import React from "react";
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import FavoritesList from "./favorites-list";
import {
  getFavoriteOffers
} from "../../../utils/common";
import {
  favoriteCards as offersPropTypes
} from "../../../prop-types/offers-validation";

const FavoritesPage = ({
  offers
}) => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesList offers={getFavoriteOffers(offers)} />
          </section>
        </div >
      </main >
      <Footer />
    </div >
  );
};

FavoritesPage.propTypes = offersPropTypes;

export default FavoritesPage;
