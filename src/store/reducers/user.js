import {
  AuthorizationStatus,
} from "../../const";
import {
  ActionType as userActionType,
} from "../actions/user";

const initialState = {
  authorizationStatus: AuthorizationStatus.VERIFIED,
  userEmail: ``,
  userAvatar: ``,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case userActionType.CHANGE_USER_DATA:
      const {
        avatarUrl,
        email,
      } = action.payload;
      return {
        ...state,
        userAvatar: avatarUrl,
        userEmail: email,
      };
    default:
      return state;
  }
};
