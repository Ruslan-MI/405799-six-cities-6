import {
  StoreNameSpace,
} from "../../const";

export const getAuthorizationStatus = (state) => state[StoreNameSpace.USER].authorizationStatus;
export const getUserEmail = (state) => state[StoreNameSpace.USER].userEmail;
export const getUserAvatar = (state) => state[StoreNameSpace.USER].userAvatar;
