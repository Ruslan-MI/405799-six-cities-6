import {
  requireAuthorization,
  changeUserData,
} from "../actions/user";
import {
  reducer,
} from "./user";
import {
  AuthorizationStatus,
} from "../../const";

const mockInitialState = {
  authorizationStatus: AuthorizationStatus.VERIFIED,
  userEmail: ``,
  userAvatar: ``,
};

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(mockInitialState);
  });

  it(`Reducer should change authorization status to received value`, () => {
    expect(reducer(mockInitialState, requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual({
        ...mockInitialState,
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it(`Reducer should change user data to received value`, () => {
    const mockAuthInfo = {
      avatarUrl: `img/1.png`,
      email: `Oliver.conner@gmail.com`,
    };

    expect(reducer(mockInitialState, changeUserData({
      avatarUrl: mockAuthInfo.avatarUrl,
      email: mockAuthInfo.email,
    })))
      .toEqual({
        ...mockInitialState,
        userAvatar: mockAuthInfo.avatarUrl,
        userEmail: mockAuthInfo.email,
      });
  });
});
