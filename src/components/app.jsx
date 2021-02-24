import React from "react";
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
import {
  propertyPages as offersPropTypes
} from "../prop-types/offers-validation";

const App = ({
  offers
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers} />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/favorites">
          <FavoritesPage offers={offers} />
        </Route>
        <Route exact path="/offer/:id" render={(props) =>
          <PropertyPage offers={offers} id={props.match.params.id} />
        } />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = offersPropTypes;

export default App;
