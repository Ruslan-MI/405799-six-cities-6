import {
  ActionType,
  requireAuthorization,
  redirectToRoute,
  redirectToNotFound,
  changeUserData,
} from "./user";
import {
  AuthorizationStatus,
  AppRoute,
} from "../../const";

const mockUserData = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for required authorization returns correct action`, () => {
    const mockAuthorizationStatus = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: mockAuthorizationStatus,
    };

    expect(requireAuthorization(mockAuthorizationStatus)).toEqual(expectedAction);
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    const mockRoute = AppRoute.FAVORITES;
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: mockRoute,
    };

    expect(redirectToRoute(mockRoute)).toEqual(expectedAction);
  });

  it(`Action creator for redirect to "Not Found Page" returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_NOT_FOUND,
    };

    expect(redirectToNotFound()).toEqual(expectedAction);
  });

  it(`Action creator for change user data returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_USER_DATA,
      payload: mockUserData,
    };

    expect(changeUserData(mockUserData)).toEqual(expectedAction);
  });
});
