import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import FavoritesPage from "./pages/favorites/favorites-page";
import LoginPage from "./pages/login/login-page";
import MainPage from "./pages/main/main-page";
import NotFoundPage from "./pages/not-found/not-found-page";
import PropertyPage from "./pages/property/property-page";

const App = ({
  placeCardCount
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage placeCardCount={placeCardCount} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id" component={PropertyPage} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCardCount: PropTypes.number.isRequired
};

export default App;
