import {
  createReducer,
} from "@reduxjs/toolkit";
import {
  AuthorizationStatus,
} from "../../const";
import {
  requireAuthorization,
  changeUserData,
} from "../actions/user";

const initialState = {
  authorizationStatus: AuthorizationStatus.VERIFIED,
  userEmail: ``,
  userAvatar: ``,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(changeUserData, (state, action) => {
    state.userAvatar = action.payload.avatarUrl;
    state.userEmail = action.payload.email;
  });
});
