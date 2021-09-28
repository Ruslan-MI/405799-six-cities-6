import React from "react";
import {
  Route,
} from "react-router-dom";
import {
  render,
} from "@testing-library/react";
import PrivateRoute from "./private-route";
import {
  AppRoute,
  AuthorizationStatus,
  StoreNameSpace,
} from "../../const";
import Test, {
  mockUserInitialState,
} from "../../mocks-for-test";


describe(`Test PrivateRouter`, () => {
  it(`Should be render component for public route, when user not authorized`, () => {
    const dataForStore = {
      [StoreNameSpace.USER]: {
        ...mockUserInitialState,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    };

    const {
      getByText,
      queryByText,
    } = render(<Test dataForStore={dataForStore} pushURL={AppRoute.FAVORITES}>
      <>
        <Route exact path={AppRoute.LOGIN}><h1>Public Route</h1></Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => (<h1>Private Route</h1>)} />
      </>
    </Test>);

    expect(getByText(/Public Route/i)).toBeInTheDocument();
    expect(queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Should be render component for private route, when user authorized`, () => {
    const dataForStore = {
      [StoreNameSpace.USER]: {
        ...mockUserInitialState,
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    };

    const {
      getByText,
      queryByText,
    } = render(<Test dataForStore={dataForStore} pushURL={AppRoute.FAVORITES}>
      <>
        <Route exact path={AppRoute.LOGIN}><h1>Public Route</h1></Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => (<h1>Private Route</h1>)} />
      </>
    </Test>);

    expect(getByText(/Private Route/i)).toBeInTheDocument();
    expect(queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
